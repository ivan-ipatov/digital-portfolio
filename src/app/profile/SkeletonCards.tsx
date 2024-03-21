import {Card, Skeleton} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import styles from './Profile.module.scss';

const b = block('skeleton-card');
export default function SkeletonCards() {
    return (
        <Card className={styles[b()]}>
            <Skeleton className={styles[b('image')]}></Skeleton>
            <Skeleton className={styles[b('title')]}></Skeleton>
            <Skeleton className={styles[b('date')]}></Skeleton>
        </Card>
    );
}
