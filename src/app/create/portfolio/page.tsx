import {CreatePortfolioForm} from '@/components/CreatePost/CreatePortfolioForm';
import {getCategories} from '../../../../utilities';

export default async function Page() {
    let CategoriesData = await getCategories();
    CategoriesData =
        CategoriesData?.filter(
            (el) => !['changelog', 'diploma'].includes(el.categoryName.toLowerCase()),
        ) ?? null;
    return (
        <>
            <CreatePortfolioForm categoriesData={CategoriesData} />
        </>
    );
}
