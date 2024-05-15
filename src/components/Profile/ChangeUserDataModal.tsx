import {Modal, TextInput} from '@gravity-ui/uikit';
import {useSession} from 'next-auth/react';
import {useState} from 'react';
import ChangeUserDataButton from './ChangeUserDataButton';
import block from "bem-cn-lite";
import styles from './Profile.module.scss'

interface IProps {
    openProps: boolean;
    onClickProps: () => void;
}

const b = block('profile-modal')

export function ChangeUserDataModal(props: IProps) {
    const {update, data: session} = useSession();
    const [newName, setName] = useState('');
    const [newCity, setCity] = useState('');

    return (
        <div>
            <Modal open={props.openProps} onClose={props.onClickProps}>
                <div className={styles[b("label")]}>
                    <label htmlFor="name">Имя</label>
                </div>
                <TextInput
                    size="l"
                    placeholder={session?.user.name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={styles[b("label")]}>
                    <label htmlFor="name">Город</label>
                </div>
                <TextInput
                    size="l"
                    placeholder={session?.user.city}
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                />
                <ChangeUserDataButton
                    update={update}
                    newName={newName}
                    setName={() => setName('')}
                    newCity={newCity}
                    setCity={() => setCity('')}
                    onClickProps={props.onClickProps}
                />
            </Modal>
        </div>
    );
}
