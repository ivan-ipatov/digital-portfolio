import styles from '@/components/Posts/PostCard.module.scss';
import {Text} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import {PostByCategory} from '@/components/Posts/PostByCategory';
import {getPostByCategory} from '../../../utilities';

const b = block('post-cards');

export async function PostsByCategory({category, name}: {category: string; name: string}) {
    const getPosts = await getPostByCategory(category);
    return (
        <div style={{paddingTop: '100px'}}>
            <Text variant="display-3">{name}</Text>
            <div className={styles[b('subpost-grid-science')]}>
                <PostByCategory postsByCategory={getPosts?.Posts ?? null} />
            </div>
        </div>
    );
}
