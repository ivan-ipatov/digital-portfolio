'use server';
import {cookies} from 'next/headers';
export async function getCookie() {
    const cookieStore = cookies();
    const themeCookie = await cookieStore.get('theme')?.value;
    return themeCookie;
}

export async function setCookie(theme: string) {
    await cookies().set('theme', theme);
}
