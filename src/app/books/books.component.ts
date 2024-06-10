import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { DataServiceService } from '../services/data-service.service';
import { CommonModule } from '@angular/common';
import { CommonStuffModule } from '../common-stuff/common-stuff.module';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule,
    CommonStuffModule,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
