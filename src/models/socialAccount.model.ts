export class SocialAccount {
    id: number;
    platform: string;
    iconPath: string;
    link: string;
    
    constructor(id: number, platform: string, iconPath: string, link: string) {
        this.id = id;
        this.platform = platform;
        this.iconPath = iconPath;
        this.link = link;
    }
}
