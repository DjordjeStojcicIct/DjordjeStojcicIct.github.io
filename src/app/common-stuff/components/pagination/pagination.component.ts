import {  Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 0;
  @Input() currentPage: number = 0;
  @Output() pageChanged = new EventEmitter<number>();

  pages: number[]=[];
  totalPages: number = 0;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array(this.totalPages)
      .fill(0)
      .map((_,i)=>i+1);
  }

  selectPage(page:number){
    if(page >=1 && page <= this.totalPages){
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
