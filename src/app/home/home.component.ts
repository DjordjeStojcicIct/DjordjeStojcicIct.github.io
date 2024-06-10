import { Component, OnInit } from '@angular/core';
import { CommonStuffModule } from '../common-stuff/common-stuff.module';
import { RouterModule } from '@angular/router';
import { Character, ICharacter } from '../interfaces/character';
import { DataServiceService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonStuffModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  harry: Character | undefined;
  hermiony: Character | undefined;
  ron: Character | undefined;
  draco: Character | undefined;

  constructor(private dataService: DataServiceService){}

  ngOnInit(): void {
    this.dataService.getCharById('9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8').subscribe((c: ICharacter | undefined) => {
      if(c != undefined){
        this.harry = new Character(c);
      } 
    });
    this.dataService.getCharById('4c7e6819-a91a-45b2-a454-f931e4a7cce3').subscribe((c: ICharacter | undefined) => {
      if(c != undefined){
        this.hermiony = new Character(c);
      } 
    });
    this.dataService.getCharById('c3b1f9a5-b87b-48bf-b00d-95b093ea6390').subscribe((c: ICharacter | undefined) => {
      if(c != undefined){
        this.ron = new Character(c);
      } 
    });
    this.dataService.getCharById('af95bd8a-dfae-45bb-bc69-533860d34129').subscribe((c: ICharacter | undefined) => {
      if(c != undefined){
        this.draco = new Character(c);
      } 
    });
  }
}
