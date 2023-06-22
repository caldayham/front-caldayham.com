export class Post {
    path: string;
    title: string;
    desc: string;
    img: string;
    date: string;
    tags: string[];
    
    constructor(path: string, title: string, desc: string, img: string, date: string, tags: string[]) {
        this.path = path;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.date = date;
        this.tags = tags;
    }
}