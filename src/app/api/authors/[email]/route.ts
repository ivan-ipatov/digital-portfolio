import {NextResponse} from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function GET(_req: Request, {params}: {params: {email: string}}) {
    try {
        const email = params.email;
        const posts = await prisma.user.findUnique({
            where: {email},
            include: {
                posts: {orderBy: {createdAt: 'desc'}},
            },
        });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({message: 'Could not fetch post'});
    }
}
