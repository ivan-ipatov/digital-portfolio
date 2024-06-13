'use client';
import {Button, Card, Select, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import styles from './Portfolio.module.scss';
import {Picture} from '@gravity-ui/icons';
import {TCategory} from '@/app/types';
import {DatePicker} from '@gravity-ui/date-components';

const b = block('portfolio');

export function CreatePortfolioForm({categoriesData}: {categoriesData: TCategory[] | null}) {
    return (
        <form>
            <div className={styles[b('grid')]}>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Название портфолио</Text>
                    <TextInput size={'xl'} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Описание проекта</Text>
                    <TextArea minRows={3} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Card className={styles[b('dragndrop-card')]}>
                        <Picture />
                        <Text variant="caption-2">Выберите или перетащите фото</Text>
                    </Card>
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Направление портфолио</Text>
                    <TextInput size={'xl'} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Select size="xl" placeholder={'Категория'}>
                        {categoriesData?.map((category: TCategory) => (
                            <Select.Option value={category.categoryName} key={category.id}>
                                {category.categoryName}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className={styles[b('grid-inner-date')]}>
                    <Text variant="subheader-3">Начало проекта</Text>
                    <DatePicker size={'xl'} style={{marginTop: '-10px'}} format="DD.MM.YYYY" />
                    <Text variant="subheader-3" style={{textAlign: 'end'}}>
                        Конец проекта
                    </Text>
                    <DatePicker size={'xl'} style={{marginTop: '-10px'}} format="DD.MM.YYYY" />
                </div>
                <Button size={'xl'} type={'submit'}>
                    Создать пост
                </Button>
            </div>
        </form>
    );
}
