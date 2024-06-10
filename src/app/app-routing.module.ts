import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CharactersComponent } from './characters/characters.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path:"movies",
    component: MoviesComponent,
  },
  {
    path:"movies/:id",
    component:MovieDetailsComponent,
  },
  {
    path:"characters",
    component:CharactersComponent,
  },
  {
    path:"books",
    component:BooksComponent,
  },
  {
    path:"**", // wildcard na kraju mora se stavi
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
