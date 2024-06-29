'use client';
import styles from '@/components/CreatePost/Portfolio.module.scss';
import block from 'bem-cn-lite';
import {Button, Card, Text, TextArea, TextInput} from '@gravity-ui/uikit';
import Image from 'next/image';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const b = block('diploma');

export function CreateDiplomaForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [diploma, setDiploma] = useState('');
    const [err, setErr] = useState('');
    const isFileDiploma = () => {
        return diploma.slice(0, 1) === '/' || diploma.includes('https://');
    };
    const router = useRouter();
    const noPhotoFileDiploma = () => {
        return (
            diploma.slice(-4) === '.jpg' ||
            diploma.slice(-4) === '.png' ||
            diploma.slice(-5) === '.jpeg'
        );
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !diploma) {
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
                    attachments: [diploma],
                    direction: 'Грамота',
                    thumbnail: diploma,
                    categoryName: 'diploma',
                    startPeriod: 'дата',
                    endPeriod: 'дата',
                    shortDescription: description,
                    link: '',
                }),
            });
            if (res.ok) {
                router.push('/');
            }
        } catch (error) {
            setErr(error as string);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles[b('grid')]}>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Название грамоты</Text>
                    <TextInput size={'xl'} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Описание грамоты</Text>
                    <TextArea minRows={3} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className={styles[b('grid-inner')]}>
                    <Text variant="subheader-3">Выберите изображение грамоты</Text>
                    <Text variant={'caption-2'}>Принимаются только форматы .png .jpg .jpeg</Text>

                    <Card className={styles[b('card')]}>
                        {noPhotoFileDiploma() && diploma !== '' && isFileDiploma() && (
                            <Image
                                src={diploma}
                                alt={'Для поисковика'}
                                width={1000}
                                height={1000}
                                className={styles[b('image')]}
                            />
                        )}
                        <TextInput
                            className={styles[b('text')]}
                            size={'xl'}
                            onChange={(e) => setDiploma(e.target.value)}
                        />
                    </Card>
                </div>
                <Button size={'xl'} type={'submit'}>
                    Создать грамоту
                </Button>
                {err && (
                    <Text variant={'body-2'} color={'danger'}>
                        {err}
                    </Text>
                )}
            </div>
        </form>
    );
}
