import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Character, ICharacter } from '../interfaces/character';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../common-stuff/components/character-card/character-card.component';
import { CommonStuffModule } from '../common-stuff/common-stuff.module';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    CommonStuffModule,
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  paginationCharacters: Character[] = [];
  currentPagee: number = 1;
  itemsPerPage: number = 24;
  charLeng:number = 0;

  constructor(private dataService: DataServiceService){}

  ngOnInit(): void {
    this.dataService.getCharacters().subscribe((ch: ICharacter[])=>{
      console.log(ch);
      this.characters = ch;
      this.charLeng = ch.length;
      this.setPagination();
    });
  }

  onPageChanged(page: number | any){
    this.currentPagee = page;
    this.setPagination();
  }

  setPagination(){
    let index = (this.currentPagee - 1) * this.itemsPerPage;
    let endIndex = index + this.itemsPerPage;
    this.paginationCharacters = this.characters.slice(index,endIndex);
  }

}
