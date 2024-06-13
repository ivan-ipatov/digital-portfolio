import prisma from '@/app/lib/prismadb';
import {NextResponse} from 'next/server';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/app/lib/AuthOptions';

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({error: 'Not authenticated'}, {status: 401});
    }

    const {
        title,
        shortDescription,
        attachments,
        description,
        direction,
        startPeriod,
        endPeriod,
        categoryName,
        category,
        thumbnail,
        publicId,
        links,
        createdAt,
        updatedAt,
        atGlance,
    } = await req.json();

    const authorEmail: string = session.user?.email ?? '';

    if (
        !title ||
        !shortDescription ||
        !attachments ||
        !description ||
        !thumbnail ||
        !categoryName ||
        !direction ||
        !startPeriod ||
        !endPeriod ||
        !categoryName
    ) {
        return NextResponse.json({error: 'Something is missing.'}, {status: 500});
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                shortDescription,
                attachments,
                description,
                direction,
                startPeriod,
                endPeriod,
                categoryName,
                category,
                thumbnail,
                publicId,
                authorEmail,
                links,
                createdAt,
                updatedAt,
                atGlance,
            },
        });

        return NextResponse.json(newPost);
    } catch (error) {
        return NextResponse.json({message: 'Could not create post.'});
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {author: {select: {name: true}}},
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({message: 'Some error occured'}, {status: 500});
    }
}
