import {Drawer, DrawerItem} from '@gravity-ui/navigation';
import {Button, Icon} from '@gravity-ui/uikit';
import {signIn, signOut, useSession} from 'next-auth/react';
import styles from './Header.module.scss';
import block from 'bem-cn-lite';
import {Bars} from '@gravity-ui/icons';
import {useState} from 'react';

const b = block('header');

export default function HeaderDrawer() {
    const [state, setState] = useState(false);
    const {status} = useSession();
    return (
        <>
            <div className={styles[b('drawer')]}>
                <Button size="l" view="outlined" onClick={() => setState(true)}>
                    <Icon data={Bars} />
                </Button>
            </div>
            <Drawer onEscape={() => setState(false)} onVeilClick={() => setState(false)}>
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
                    visible={state}
                    direction="right"
                />
            </Drawer>
        </>
    );
}
