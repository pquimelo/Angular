import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition:boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome:string,idade:number}>= [
    {nome:"Pedro Juliano",idade:21},
    {nome:"João",idade:15},
];
  constructor (){}
  ngOnInit(): void {
    setInterval(()=>{
      if(this.condition){

        this.condition =false;
      }else{
        this.condition= true;
      }
    },2000)
  }
  public onCLick():void{
    if(this.conditionClick){

      this.conditionClick =false;
    }else{
      this.conditionClick= true;
    }
  }
  public onCLickAddList():void{
    this.list.push({nome:"Anna",idade:19});
  }
  public onClickEventList(i:number){
this.list.splice(i,1);
  }
}
