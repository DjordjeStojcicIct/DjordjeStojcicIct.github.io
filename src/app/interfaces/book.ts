export interface IBook {
    serial: string;
    title: string;
    summary: string;
    release_date: string;
    dedication:string;
    pages: string;
    cover: string;
    wiki: string;
}

export class Book implements IBook{
    serial: string;
    title: string;
    summary: string;
    release_date: string;
    dedication:string;
    pages: string;
    cover: string;
    wiki: string;

    constructor(data: IBook){
        this.serial = data.serial;
        this.title = data.title;
        this.summary = data.summary;
        this.release_date = data.release_date;
        this.dedication = data.dedication;
        this.pages = data.pages;
        this.wiki = data.wiki;
        this.cover = data.cover;
    }
}
