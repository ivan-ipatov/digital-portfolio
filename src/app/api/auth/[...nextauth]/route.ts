import NextAuth from 'next-auth';
import VkProvider from 'next-auth/providers/vk';

const handler = NextAuth({
    providers: [
        VkProvider({
            clientId: process.env.VK_CLIENT_ID as string,
            clientSecret: process.env.VK_CLIENT_SECRET as string,
            authorization: {params: {scope: 'phone_number'}},
            userinfo: {params: {fields: 'photo_100 email'}},
            profile(profile) {
                return {
                    id: profile.id,
                    name: [profile.first_name, profile.last_name].filter(Boolean).join(' '),
                    email: profile.email,
                    image: profile.photo_100,
                };
            },
        }),
        // ...add more providers here
    ],
});

export {handler as GET, handler as POST};
