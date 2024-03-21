import NextAuth from 'next-auth';
import VkProvider from 'next-auth/providers/vk';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        VkProvider({
            clientId: process.env.VK_CLIENT_ID as string,
            clientSecret: process.env.VK_CLIENT_SECRET as string,
            // Запрашиваем из VK фото 400x400 и город
            userinfo: {params: {fields: 'photo_400,city'}},
            profile(result) {
                const profile = result.response?.[0] ?? {};
                return {
                    id: profile.id,
                    name: [profile.first_name, profile.last_name].filter(Boolean).join(' '),
                    email: profile.email,
                    image: profile.photo_400,
                    city: profile.city,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        }),
    ],
    callbacks: {
        async session({session, token}) {
            const userJSON = session.user;
            // Заносим в session, если не undefined
            if (userJSON) {
                userJSON.email = token.email;
                userJSON.id = token.id;
                userJSON.city = token.city;
            }
            return session;
        },
        async jwt({token, account, user, session, trigger}) {
            const newToken = token;
            // Возвращаем от VK и Google провайдеров id пользователя
            if (account) {
                newToken.accessToken = account.access_token;
                newToken.id = user?.id;
            }
            // Возвращаем от VK email и город, если есть
            if (account?.provider === 'vk') {
                newToken.accessToken = account.access_token;
                newToken.email = account.email;
                if (user.city) newToken.city = user.city.title;
            }
            // Для обновления пользовательских данных
            if (trigger === 'update') {
                if (session?.name) newToken.name = session.name;
                if (session?.city) newToken.city = session.city;
            }

            return newToken;
        },
    },
});

export {handler as GET, handler as POST};
