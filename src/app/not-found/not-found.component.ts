import { Component } from '@angular/core';
import { CommonStuffModule } from '../common-stuff/common-stuff.module';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonStuffModule,
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
