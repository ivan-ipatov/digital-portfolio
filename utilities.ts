import {BASE_URL} from './constants';
import {TCategory, TPost, TUser} from '@/app/types';

export const getURL = (relPath: string) => `${BASE_URL}${relPath}`;

export function formatDate(isoString: string | number | Date | undefined) {
    // Преобразуем строку ISO в объект Date
    const date = new Date(isoString ?? '');

    // Получаем день, месяц и год
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в объекте Date начинаются с 0
    const year = date.getFullYear();

    // Форматируем дату в строку DD.MM.YYYY
    return `${day}.${month}.${year}`;
}

export const getPosts = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/`, {cache: 'no-store'});
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};

export const getPostData = async (id: number) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {cache: 'no-store'});
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};

export const getCategories = async (): Promise<TCategory[] | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {cache: 'no-store'});
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};

export const getUserPostsData = async (email: string): Promise<TUser | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`, {
            cache: 'no-store',
        });
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};

export const getPostByID = async (id: string): Promise<TPost | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {cache: 'no-store'});
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};
export const getPostByCategory = async (category: string): Promise<TCategory | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${category}`, {
            cache: 'no-store',
        });
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};
export const getPostsByCategory = async (category: string): Promise<TCategory | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories/${category}`, {
            cache: 'no-store',
        });
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};

export const getUserData = async (email: string): Promise<TUser | null> => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`, {
            cache: 'no-store',
        });
        if (res.ok) {
            return await res.json();
        }
    } catch (error) {}
    return null;
};