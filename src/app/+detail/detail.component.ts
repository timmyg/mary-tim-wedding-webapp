import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  template: require('./detail.component.pug')
})
export class Detail {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
