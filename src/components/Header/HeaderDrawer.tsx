import {Drawer, DrawerItem} from '@gravity-ui/navigation';
import {Button} from '@gravity-ui/uikit';
import {signIn, signOut, useSession} from 'next-auth/react';
import styles from './Header.module.scss';
import block from 'bem-cn-lite';

const b = block('header');

interface IProps {
    setState: () => void;
    state: boolean;
}
export default function HeaderDrawer(props: IProps) {
    const {status} = useSession();
    return (
        <Drawer onEscape={props.setState} onVeilClick={props.setState}>
            <DrawerItem
                id="item-1"
                content={
                    <div className={styles[b('drawer-main')]}>
                        {status === 'unauthenticated' ? (
                            <Button size="l" onClick={() => signIn()}>
                                Войти
                            </Button>
                        ) : (
                            <Button size="l" onClick={() => signOut()}>
                                Выйти
                            </Button>
                        )}
                    </div>
                }
                visible={props.state}
                direction="right"
            />
        </Drawer>
    );
}
