export interface IMovie {
    serial: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_comoposers: string[];
    release_date: string;
    running_time:string;
    box_office: string;
    rating: string;
    trailer: string;
    poster: string;
    wiki: string;
}

export class Movie implements IMovie{
    serial: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_comoposers: string[];
    release_date: string;
    running_time:string;
    box_office: string;
    rating: string;
    trailer: string;
    poster: string;
    wiki: string;

    constructor(data: IMovie){
        this.serial = data.serial;
        this.title = data.title;
        this.summary = data.summary;
        this.directors = data.directors;
        this.screenwriters = data.screenwriters;
        this.producers = data.producers;
        this.cinematographers = data.cinematographers;
        this.distributors = data.distributors;
        this.editors = data.editors;
        this.music_comoposers = data.music_comoposers;
        this.release_date = data.release_date;
        this.running_time = data.running_time;
        this.box_office = data.box_office;
        this.rating = data.rating;
        this.trailer = data.trailer;
        this.poster = data.poster;
        this.wiki = data.wiki;
    }
}
