import {Link} from '@gravity-ui/uikit';
import {CategoriesData} from '../../../data';

export function CategoriesList() {
    return (
        <ul>
            {CategoriesData &&
                CategoriesData.map(
                    (category: {
                        id: number | null | undefined;
                        name: string | null | undefined;
                    }) => (
                        <li key={category.id}>
                            <Link href={`/categories/${category.name}`}>{category.name}</Link>
                        </li>
                    ),
                )}
        </ul>
    );
}
