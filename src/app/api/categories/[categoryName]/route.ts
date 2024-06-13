import {NextResponse} from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function GET(_req: Request, {params}: {params: {categoryName: string}}) {
    try {
        const categoryName = params.categoryName;
        const posts = await prisma.category.findUnique({
            where: {categoryName},
            include: {
                Posts: {include: {author: true}, orderBy: {createdAt: 'desc'}},
            },
        });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({message: 'Could not fetch post'});
    }
}
