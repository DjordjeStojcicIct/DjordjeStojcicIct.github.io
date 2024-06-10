export interface ICharacter {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    patronus: string;
    hogwartsStudent:boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;
}

export class Character implements ICharacter{
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    patronus: string;
    hogwartsStudent:boolean;
    hogwartsStaff: boolean;
    actor: string;
    alive: boolean;
    image: string;

    constructor(data: ICharacter){
        this.id = data.id;
        this.name = data.name;
        this.species = data.species;
        this.gender = data.gender;
        this.house = data.house;
        this.dateOfBirth = data.dateOfBirth;
        this.yearOfBirth = data.yearOfBirth;
        this.wizard = data.wizard;
        this.ancestry = data.ancestry;
        this.patronus = data.patronus;
        this.hogwartsStudent = data.hogwartsStudent;
        this.hogwartsStaff = data.hogwartsStaff;
        this.actor = data.actor;
        this.alive = data.alive;
        this.image = data.image;
    }
}

