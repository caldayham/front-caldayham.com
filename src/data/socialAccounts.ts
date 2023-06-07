import { SocialAccount } from "@/models/socialAccount.model";

const socialAccounts:SocialAccount[] = [
    {
        id: 1,
        platform: 'linkedin',
        iconPath: '/icons/linkedin.png',
        link: 'https://www.linkedin.com/in/caldayham/',
    },
    {
        id: 2,
        platform: 'youtube',
        iconPath: '/icons/youtube.png',
        link: 'https://www.youtube.com/@caldayham',
    },
    {
        id: 3,
        platform: 'twitter',
        iconPath: '/icons/twitter.png',
        link: 'https://twitter.com/caldayham',
    },
    {
        id: 4,
        platform: 'instagram',
        iconPath: '/icons/instagram.png',
        link: 'https://www.instagram.com/caldayham/',
    },
]

export default socialAccounts;