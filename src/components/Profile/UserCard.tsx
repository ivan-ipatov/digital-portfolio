import {Button, Card, Icon} from '@gravity-ui/uikit';
import GetUserName from '../UserData/GetUserName';
import UserAvatar from '../UserData/UserAvatar';
import {Envelope, MapPin, Pencil} from '@gravity-ui/icons';
import GetUserEmail from '../UserData/GetUserEmail';
import GetUserCity from '../UserData/GetUserCity';
import {MouseEventHandler} from 'react';
import block from 'bem-cn-lite';
import styles from './Profile.module.scss';

interface IProps {
    onClickProps?: MouseEventHandler;
}
const b = block('user-card');
export default function UserCard(props: IProps) {
    return (
        <div className={styles[b()]}>
            <Card className={styles[b('body')]}>
                <UserAvatar size={120} rounded />
                <div className={styles[b('data')]}>
                    <h2 className={styles[b('username')]}>
                        <GetUserName />
                    </h2>
                    <h2 className={styles[b('with-icon')]}>
                        <Icon data={Envelope} />
                        <GetUserEmail />
                    </h2>
                    <h2 className={styles[b('with-icon')]}>
                        <Icon data={MapPin} />
                        <GetUserCity />
                    </h2>
                    <div className={styles[b('edit-button')]}>
                        <Button size="l" onClick={props.onClickProps}>
                            <Icon data={Pencil} />
                            Редактировать
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
