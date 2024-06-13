import {MapCategories} from '@/components/Categories/MapCategories';
import {getCategories} from '../../../utilities';

export async function CategoriesList() {
    const CategoriesData = await getCategories();
    return <MapCategories CategoriesData={CategoriesData} />;
}
