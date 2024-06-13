import block from 'bem-cn-lite';
import {Text} from '@gravity-ui/uikit';
import styles from './Categories.module.scss';

type Props = {
    direction: string;
};

const b = block('categories');

export function Directions({direction}: Props) {
    return (
        <div className={styles[b('label')]}>
            <Text variant="body-2">{direction}</Text>
        </div>
    );
}
