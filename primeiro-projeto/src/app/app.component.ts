import {  Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>

  <app-new-component></app-new-component>
<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {


  constructor() { }

  
  ngOnInit(): void {
    setTimeout(() => {
      console.log('Pedro');

    }, 5000);
  }
}
