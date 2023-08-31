import { Component } from '@angular/core';
import { TopNavService } from './top-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  constructor(public navService: TopNavService) {}
}
