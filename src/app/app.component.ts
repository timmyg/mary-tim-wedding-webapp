/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.scss' ],
  template: require('./app.component.pug')
})
export class App {
  // angularclassLogo = 'assets/img/angularclass-avatar.png';
  angularclassLogo = 'http://placehold.it/70x70';
  name = 'Angular 2 Webpack Starter';
  url = '/#';

  constructor(
    public appState: AppState,
    public router: Router) {

  }

  ngOnInit() {
    console.log('Wow you are pretty cool');
  }

  isLightHeader() {
    return this.router.url === '/registry';
  }

  isDarkHeader() {
    return this.router.url === '/details' || this.router.url === '/the-proposal' || this.router.url === '/our-story';
  }

  closeOnClick() {
    (<any>$("#navbarResponsive")).collapse('hide');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
