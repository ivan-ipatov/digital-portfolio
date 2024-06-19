import UserCard from '@/components/Profile/UserCard';
import {ProfileTabs} from '@/components/Profile/ProfileTabs';
import {getUserPostsData} from '../../../utilities';
import {Redirect} from '@/components/Profile/Redirect';
import {TUser} from '@/app/types';
import {getServerSession} from 'next-auth/next';
import {authOptions} from '@/app/lib/AuthOptions';

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email ?? '';
    const UserData: TUser | null = await getUserPostsData(email);
    const UserPostsData =
        UserData?.posts.filter((post) => !['changelog', 'diploma'].includes(post.categoryName)) ??
        null;
    const UserDiplomas = UserData?.posts.filter((post) => post.categoryName === 'diploma') ?? null;
    return (
        <>
            <Redirect />
            <UserCard />
            <ProfileTabs UserPostsData={UserPostsData} UserDiplomas={UserDiplomas} />
        </>
    );
}
