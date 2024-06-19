import {TPost} from '@/app/types';
import {AddNewPost} from '@/components/Profile/AddNewPost';
import PortfolioAttachments from '@/components/Posts/PortfolioAttachments';

type Props = {
    DiplomaData: TPost[] | null;
};

export function UserDiplomasProfile({DiplomaData}: Props) {
    if (DiplomaData?.length !== 0) {
        return (
            <>
                <AddNewPost link={'diploma'} />
                <PortfolioAttachments
                    attachments={DiplomaData?.map((data) => data.attachments)[0] ?? []}
                />
            </>
        );
    }
    return <AddNewPost link={'diploma'} />;
}
