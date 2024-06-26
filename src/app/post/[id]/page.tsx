import {formatDate, getPostByID} from '../../../../utilities';
import {PostPageChangeLog} from '@/components/Posts/PostPageChangeLog';
import {PostPage} from '@/components/Posts/PostPage';
import {Text} from "@gravity-ui/uikit";

type Props = {
    params: {id: string};
};

export default async function Page(props: Props) {
    const postData = await getPostByID(props.params.id);

    if (postData?.categoryName.toLowerCase() === 'changelog') {
        return (
            <PostPageChangeLog
                title={postData.title}
                shortDescription={postData.shortDescription}
                image={postData.thumbnail ?? '/no-photo.png'}
                content={postData.description}
                author={postData.author.name}
                date={postData.createdAt}
            />
        );
    }
    if (postData !== null) {
    return (
        <PostPage
            id={postData?.id ?? ''}
            title={postData?.title ?? ''}
            image={postData?.thumbnail ?? '/no-photo.png'}
            shortDescription={postData?.shortDescription ?? ''}
            description={postData?.description ?? ''}
            author={postData?.author['name'] ?? ''}
            email={postData?.author['email'] ?? ''}
            date={formatDate(postData?.createdAt)}
            attachments={postData?.attachments ?? []}
            direction={postData?.direction ?? ''}
            startPeriod={postData?.startPeriod ?? ''}
            endPeriod={postData?.endPeriod ?? ''}
            link={postData?.link ?? ''}
        />
    );}
    return <Text variant="header-2" style={{display: 'grid', placeContent: 'center'}}>Страницы не существует</Text>;
}
