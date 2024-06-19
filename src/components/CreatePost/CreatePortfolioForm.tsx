'use client';
import {Button, Card, Icon, Select, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import styles from './Portfolio.module.scss';
import {TrashBin} from '@gravity-ui/icons';
import {TCategory} from '@/app/types';
import {DatePicker} from '@gravity-ui/date-components';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import PortfolioAttachments from '@/components/Posts/PortfolioAttachments';
import Image from 'next/image';

const b = block('portfolio');

export function CreatePortfolioForm({categoriesData}: {categoriesData: TCategory[] | null}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [direction, setDirection] = useState('');
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [attachments, setAttachments] = useState<string[]>([]);
    const [thumbnail, setThumbnail] = useState('');
    const [link, setLink] = useState('');
    const [attachmentInput, setAttachmentInput] = useState('');
    const [err, setErr] = useState('');
    const router = useRouter();

    const addAttachment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (attachmentInput.trim() !== '') {
            setAttachments((prev) => [...prev, attachmentInput]);
            setAttachmentInput('');
        }
    };
    const removeAttachment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (attachments.length > 1) {
            return setAttachments(attachments.slice(0, -1));
        }
        return setAttachments([]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !title ||
            !description ||
            !direction ||
            !category ||
            !startDate ||
            !endDate ||
            !shortDescription ||
            !attachments ||
            !thumbnail
        ) {
            setErr('Пожалуйста, заполните все поля');
            return;
        }
        try {
            const res = await fetch('/api/posts/', {
                method: 'POST',
                headers: {
                    contentType: 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    direction: direction,
                    attachments: attachments,
                    thumbnail: thumbnail,
                    categoryName: category,
                    startPeriod: startDate,
                    endPeriod: endDate,
                    shortDescription: shortDescription,
                    link: link,
                }),
            });
            if (res.ok) {
                router.push('/');
            }
        } catch (error) {
            setErr(error as string);
        }
    };

    const noPhotoFile = () => {
        return !(
            attachmentInput.slice(-4) === '.jpg' ||
            attachmentInput.slice(-4) === '.png' ||
            attachmentInput.slice(-5) === '.jpeg'
        );
    };

    const isFile = () => {
        return attachmentInput.slice(0, 1) === '/' || attachmentInput.includes('https://');
    };

    const isFileThumbnail = () => {
        return thumbnail.slice(0, 1) === '/' || thumbnail.includes('https://');
    };

    const noPhotoFileThumbnail = () => {
        return (
            thumbnail.slice(-4) === '.jpg' ||
            thumbnail.slice(-4) === '.png' ||
            thumbnail.slice(-5) === '.jpeg'
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles[b('grid')]}>
                <Text variant={'header-2'} style={{textAlign: 'center'}}>
                    Основная часть
                </Text>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Название портфолио</Text>
                    <TextInput size={'xl'} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Описание проекта</Text>
                    <TextArea minRows={3} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    {attachments.length !== 0 && <PortfolioAttachments attachments={attachments} />}

                    <Text variant={'subheader-3'}>Добавьте фото в портфолио</Text>
                    <Text variant={'caption-2'}>Принимаются только форматы .png .jpg .jpeg</Text>
                    {attachments.length === 0 ? (
                        <TextInput
                            size={'xl'}
                            onChange={(e) => setAttachmentInput(e.target.value)}
                            value={attachmentInput}
                        />
                    ) : (
                        <div className={styles[b('grid-attachments')]}>
                            <TextInput
                                size={'xl'}
                                onChange={(e) => setAttachmentInput(e.target.value)}
                                value={attachmentInput}
                            />

                            <Button size={'xl'} onClick={removeAttachment}>
                                <Icon data={TrashBin} />
                                Удалить последнее
                            </Button>
                        </div>
                    )}
                    <div>
                        {!noPhotoFile() && isFile() && (
                            <Button size={'m'} onClick={addAttachment}>
                                Добавить
                            </Button>
                        )}
                    </div>
                </div>

                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Ссылка на файлы портфолио</Text>
                    <Text variant={'caption-2'}>(необязательно)</Text>
                    <TextInput size={'xl'} onChange={(e) => setLink(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Направление портфолио</Text>
                    <TextInput size={'xl'} onChange={(e) => setDirection(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Select size="xl" placeholder={'Категория'} onUpdate={(e) => setCategory(e[0])}>
                        {categoriesData?.map((cat) => (
                            <Select.Option value={cat.categoryName} key={cat.id}>
                                {cat.transcribeName}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className={styles[b('grid-inner-date')]}>
                    <Text variant="subheader-3">Начало проекта</Text>
                    <DatePicker
                        size={'xl'}
                        style={{marginTop: '-10px'}}
                        format="DD.MM.YYYY"
                        onUpdate={(e) => setStartDate(e?.format('DD.MM.YYYY') ?? '')}
                    />
                    <Text variant="subheader-3" style={{textAlign: 'end'}}>
                        Конец проекта
                    </Text>
                    <DatePicker
                        size={'xl'}
                        style={{marginTop: '-10px'}}
                        format="DD.MM.YYYY"
                        onUpdate={(e) => setEndDate(e?.format('DD.MM.YYYY') ?? '')}
                    />
                </div>
                <Text variant={'header-2'} style={{textAlign: 'center', marginTop: '30px'}}>
                    Дополнительная часть (SEO-разметка)
                </Text>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Выберите изображение для поисковиков</Text>
                    <Text variant={'caption-2'}>Принимаются только форматы .png .jpg .jpeg</Text>

                    <Card className={styles[b('card')]}>
                        {noPhotoFileThumbnail() && thumbnail !== '' && isFileThumbnail() && (
                            <Image
                                src={thumbnail}
                                alt={'Для поисковика'}
                                width={1000}
                                height={1000}
                                className={styles[b('image')]}
                            />
                        )}
                        <TextInput
                            className={styles[b('text')]}
                            size={'xl'}
                            onChange={(e) => setThumbnail(e.target.value)}
                        />
                    </Card>
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Краткое описание проекта</Text>
                    <Text variant={'caption-2'}>для поисковиков</Text>
                    <TextArea minRows={2} onChange={(e) => setShortDescription(e.target.value)} />
                </div>
                <Button size={'xl'} type={'submit'}>
                    Создать пост
                </Button>
                {err && (
                    <Text variant={'subheader-3'} color={'danger'}>
                        {err}
                    </Text>
                )}
            </div>
        </form>
    );
}
