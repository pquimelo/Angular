import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
template: `
{{valor}}
<button (click)="adicionar()">Adicionar</button>
<router-outlet></router-outlet>
`


,
})
export class AppComponent implements OnInit,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
 public valor:number =1;
  constructor(){}
 
public adicionar():number{
return this.valor +=1;

}
 ngOnInit():void{
  setTimeout(()=>{
  console.log('Pedro');
    
  },5000);
 }
 ngDoCheck(): void {
  console.log('ngDoCheck');
 }
 ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
 }
 ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
 }
 ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
 }
 ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked');
 }
}
