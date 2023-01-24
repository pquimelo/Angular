import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = 'Denner';
  public idade: number = 21;
  public checkedDisabled: boolean = false;

  public position: { x: number, y: number } = { x: 0, y: 0 };


  constructor() { }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }
  public mouseMoveTest(valor: MouseEvent) {

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
