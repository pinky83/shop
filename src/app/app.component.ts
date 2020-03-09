import { Component } from '@angular/core';
import {FirstComponent} from './products/components/first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
}
