import { Component, OnInit } from '@angular/core';
import { IMovie, Movie } from '../interfaces/movie';
import { DataServiceService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';
import { CommonStuffModule } from '../common-stuff/common-stuff.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    CommonStuffModule,
    RouterModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  constructor(private dataService: DataServiceService){}

  movies: Movie[] = [];

  ngOnInit(){
    return this.dataService.getMovies().subscribe((data: IMovie[])=>{
      this.movies = data.map(movie=>new Movie(movie));
    });
  }
}
