import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  public  title:string ="Bem vindo!";
constructor(){}
ngOnInit():void{

}
}
