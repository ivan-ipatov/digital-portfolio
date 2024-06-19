import {getPostsByCategory} from '../../../../utilities';
import {CategoryPage} from '@/components/Categories/CategoryPage';
import {Text} from '@gravity-ui/uikit';
import styles from './CategoryPage.module.scss';
import block from 'bem-cn-lite';

const b = block('page');

export default async function Page({params}: {params: {name: string}}) {
    const posts = await getPostsByCategory(params.name);
    if (posts)
        return (
            <div className={styles[b()]}>
                <Text variant={'display-2'} className={styles[b('text')]}>
                    Выбрана категория: {posts.transcribeName}
                </Text>
                <CategoryPage PostsData={posts.Posts} />
            </div>
        );
    return (
        <>
            <Text variant="display-1" style={{display: 'grid', placeContent: 'center'}}>
                Такой категории не существует
            </Text>
        </>
    );
}
