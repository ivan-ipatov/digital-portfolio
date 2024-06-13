import block from 'bem-cn-lite';
import styles from './Profile.module.scss';
import {Card, Icon, Link, Text} from '@gravity-ui/uikit';
import {CirclePlus} from '@gravity-ui/icons';

const b = block('cards');

export function AddNewPost() {
    return (
        <Card className={styles[b('body')]}>
            <div className={styles[b('post')]}>
                <Link href={'create/portfolio'} className={styles[b('create')]}>
                    <Icon data={CirclePlus} size={40} />
                    <Text variant="body-2">Создать новый</Text>
                </Link>
            </div>
        </Card>
    );
}
