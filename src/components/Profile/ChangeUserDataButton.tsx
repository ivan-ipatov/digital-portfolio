import {Button, Icon} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import {FloppyDisk} from '@gravity-ui/icons';
import styles from './Profile.module.scss';
import {Session} from 'next-auth';

const b = block('modal-window_button');
type UpdateSession = (data?: {name?: string; city?: string}) => Promise<Session | null>;
interface IProps {
    update: UpdateSession;
    newName: string;
    setName: () => void;
    newCity: string;
    setCity: () => void;
    onClickProps: () => void;
}
export default function ChangeUserDataButton(props: IProps) {
    const updateUserData = () => {
        if (props.newName !== '' && props.newCity !== '') {
            props.update({name: props.newName, city: props.newCity});
            props.setName();
            props.setCity();
            props.onClickProps();
            return;
        }
        if (props.newName !== '') {
            props.update({name: props.newName});
            props.setName();
            props.onClickProps();
            return;
        }
        if (props.newCity !== '') {
            props.update({city: props.newCity});
            props.setCity();
            props.onClickProps();
            return;
        }
    };
    return (
        <div className={styles[b()]}>
            <Button size="l" onClick={() => updateUserData()}>
                <Icon data={FloppyDisk} />
                Сохранить
            </Button>
        </div>
    );
}
