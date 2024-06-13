'use client';
import * as React from 'react';
import {Link} from '@gravity-ui/uikit';
import {TCategory} from '@/app/types';

type Props = {
    CategoriesData: TCategory[] | null;
};

export function MapCategories({CategoriesData}: Props) {
    return (
        <ul>
            {CategoriesData &&
                CategoriesData.map((category) => (
                    <li key={category.id}>
                        <Link href={`/categories/${category.categoryName}`}>
                            {category.categoryName}
                        </Link>
                    </li>
                ))}
        </ul>
    );
}
