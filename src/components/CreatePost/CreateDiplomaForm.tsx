'use client';
import styles from '@/components/CreatePost/Portfolio.module.scss';
import block from 'bem-cn-lite';
import {Button, Card, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import {Picture} from '@gravity-ui/icons';

const b = block('diploma');

export function CreateDiplomaForm() {
    return (
        <form>
            <div className={styles[b('grid')]}>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Название грамоты</Text>
                    <TextInput size={'xl'} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Описание грамоты</Text>
                    <TextArea minRows={3} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Card className={styles[b('dragndrop-card')]}>
                        <Picture />
                        <Text variant="caption-2">Выберите или перетащите фото</Text>
                    </Card>
                </div>
                <Button size={'xl'} type={'submit'}>
                    Создать грамоту
                </Button>
            </div>
        </form>
    );
}
