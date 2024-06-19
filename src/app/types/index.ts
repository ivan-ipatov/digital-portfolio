export type TCategory = {
    id: string;
    categoryName: string;
    transcribeName: string;
    Posts: TPost[];
};

export type TPost = {
    id: string;
    title: string;
    shortDescription: string;
    attachments: string[];
    description: string;
    direction: string;
    startPeriod: string;
    endPeriod: string;
    authorEmail: string;
    author: {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean | null;
        image: string;
        createdAt: string;
        updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
    categoryName: string;
    link: string;
    thumbnail: string;
    atGlance: boolean;
};

export type TUser = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean | null;
    image: string;
    createdAt: string;
    updatedAt: string;
    posts: TPost[];
};
