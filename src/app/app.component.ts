import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'aglet';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
