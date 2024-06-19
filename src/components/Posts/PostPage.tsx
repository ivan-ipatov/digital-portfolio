'use client';
import block from 'bem-cn-lite';
import styles from './PostCard.module.scss';
import {Card, Icon, Link, Text, UserLabel} from '@gravity-ui/uikit';
import Image from 'next/image';
import {Directions} from '@/components/Categories/Directions';
import PortfolioAttachments from '@/components/Posts/PortfolioAttachments';
import {Metadata} from 'next';
import {FileZipper} from '@gravity-ui/icons';

type Props = {
    title: string;
    image: string;
    date: string;
    attachments: string[];
    description: string;
    direction: string;
    startPeriod: string;
    endPeriod: string;
    author: string;
    shortDescription: string;
    link: string;
};
const b = block('post-page');

export async function generateMetadata({title, shortDescription, image}: Props): Promise<Metadata> {
    return {
        title: title,
        description: shortDescription,
        openGraph: {
            images: image,
        },
    };
}

export function PostPage({
    title,
    startPeriod,
    endPeriod,
    attachments,
    description,
    direction,
    date,
    author,
    image,
    link,
}: Props) {
    return (
        <div className={styles[b('grid')]}>
            <div className={styles[b('image-grid')]}>
                <div className={styles[b('meta-image')]}>
                    <Text variant="display-3" className={styles[b('title')]}>
                        {title}
                    </Text>
                    <div className={styles[b('meta-inside')]}>
                        <UserLabel type={'empty'} className={styles[b('user-label')]}>
                            {author}
                        </UserLabel>
                        <UserLabel type={'empty'} className={styles[b('user-label')]}>
                            {date}
                        </UserLabel>
                    </div>
                </div>
                <div className={styles[b('overlay')]}>
                    <Image
                        className={styles[b('image')]}
                        src={image}
                        alt={`Image of ${title}`}
                        width={1920}
                        height={1080}
                    ></Image>
                </div>
            </div>
            <div className={styles[b('content')]}>
                <PortfolioAttachments attachments={attachments} />
                <div className={styles[b('inner')]}>
                    <Text variant="header-2">Описание проекта:</Text>
                    <Text variant="body-2">{description}</Text>
                </div>
                <div className={styles[b('inner')]}>
                    <Text variant="header-1">Направление портфолио:</Text>
                    <Directions direction={direction} />
                </div>
                <div className={styles[b('inner')]}>
                    <Text variant="header-1">Период создания:</Text>
                    <Text variant="body-2">{startPeriod + ' - ' + endPeriod}</Text>
                </div>
                {link !== '' && (
                    <Link href={link}>
                        <Card
                            style={{
                                padding: '30px 100px',
                                display: 'grid',
                                gap: '10px',
                                placeContent: 'center',
                                placeItems: 'center',
                            }}
                        >
                            <Icon data={FileZipper} size={'40px'} />
                            <Text variant="body-2">Ссылка на файл с портфолио</Text>
                        </Card>
                    </Link>
                )}
            </div>
        </div>
    );
}
