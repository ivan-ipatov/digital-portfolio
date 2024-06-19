import {OtherUserCard} from '@/components/Profile/OtherUserCard';
import {getUserData} from '../../../../utilities';
import {OtherProfileTabs} from '@/components/Profile/OtherProfileTabs';

export default async function ProfilePage({params}: {params: {email: string}}) {
    const user = await getUserData(params.email);
    const UserPostsData =
        user?.posts.filter((post) => !['changelog', 'diploma'].includes(post.categoryName)) ?? null;
    const UserDiplomas = user?.posts.filter((post) => post.categoryName === 'diploma') ?? null;
    return (
        <div style={{height: 'min-content'}}>
            <OtherUserCard
                email={user?.email ?? ''}
                image={user?.image ?? ''}
                username={user?.name ?? ''}
            />
            <OtherProfileTabs UserPostsData={UserPostsData} UserDiplomas={UserDiplomas} />
        </div>
    );
}
