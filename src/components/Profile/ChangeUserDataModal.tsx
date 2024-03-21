import {Modal, TextArea} from '@gravity-ui/uikit';
import {useSession} from 'next-auth/react';
import {useState} from 'react';
import ChangeUserDataButton from './ChangeUserDataButton';

interface IProps {
    openProps: boolean;
    onClickProps: () => void;
}

export function ChangeUserDataModal(props: IProps) {
    const {update, data: session} = useSession();
    const [newName, setName] = useState('');
    const [newCity, setCity] = useState('');

    return (
        <div>
            <Modal open={props.openProps} onClose={props.onClickProps}>
                <TextArea
                    size="l"
                    placeholder={session?.user.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextArea
                    size="l"
                    placeholder={session?.user.city}
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
