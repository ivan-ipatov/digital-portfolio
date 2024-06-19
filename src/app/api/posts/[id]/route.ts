import prisma from '@/app/lib/prismadb';
import {NextResponse} from 'next/server';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/app/lib/AuthOptions';

export async function GET(_req: Request, {params}: {params: {id: string}}) {
    try {
        const id = parseInt(params.id, 10);
        const post = await prisma.post.findUnique({
            where: {id},
            include: {
                author: true,
            },
        });
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: 'Could not fetch post'});
    }
}

export async function PUT(req: Request, {params}: {params: {id: string}}) {
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
        link,
        author,
        createdAt,
        updatedAt,
        atGlance,
    } = await req.json();
    const id = parseInt(params.id, 10);

    try {
        const post = await prisma.post.update({
            where: {id},
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
                link,
                author,
                createdAt,
                updatedAt,
                atGlance,
            },
        });

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: 'Error editing post'});
    }
}

export async function DELETE(_req: Request, {params}: {params: {id: string}}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({error: 'Not authenticated'}, {status: 401});
    }

    const id = parseInt(params.id, 10);
    try {
        const post = await prisma.post.delete({where: {id}});
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({message: 'Error deleting the post'});
    }
}
