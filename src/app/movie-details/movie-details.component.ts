import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonStuffModule } from 'src/app/common-stuff/common-stuff.module';
import { IMovie, Movie } from 'src/app/interfaces/movie';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    CommonStuffModule,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  constructor(private dataService: DataServiceService, private route: ActivatedRoute){}

  movie?: Movie;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      // Extract the value of the 'serial' parameter
      let serial = params.get('id')?.toString()??'';
      this.dataService.getMovieBySerial(serial).subscribe((movie: IMovie | undefined) => {
        if(movie != undefined){
          this.movie = new Movie(movie);
        } 
      });
    });
    
   
  }
}
