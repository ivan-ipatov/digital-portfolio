import {CreatePortfolioForm} from '@/components/CreatePost/CreatePortfolioForm';
import {getCategories} from '../../../../utilities';

export default async function Page() {
    let CategoriesData = await getCategories();
    CategoriesData =
        CategoriesData?.filter((el) => el.categoryName.toLowerCase() !== 'changelog') ?? null;
    return (
        <>
            <CreatePortfolioForm categoriesData={CategoriesData} />
        </>
    );
}
