export class Post {
    id: number;
    title: string;
    date: string;
    content: string;
    tags: string[];
    
    constructor(id: number, title: string, date: string, content: string, tags: string[]) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.content = content;
        this.tags = tags;
    }
}