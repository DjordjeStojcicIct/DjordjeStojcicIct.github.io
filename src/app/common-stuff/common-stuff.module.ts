import { Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CharacterCardComponent,
    MovieCardComponent,
    BookCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CharacterCardComponent,
    MovieCardComponent,
    BookCardComponent,
  ]
})
export class CommonStuffModule { }
