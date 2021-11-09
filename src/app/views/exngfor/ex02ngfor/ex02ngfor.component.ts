import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02ngfor',
  templateUrl: './ex02ngfor.component.html',
  styleUrls: ['./ex02ngfor.component.css']
})
export class Ex02ngforComponent implements OnInit {

  paises = ['Canada', 'Holanda', 'Brasil', 'Bélgica']
  capitais= ['Ottawa', 'Amsterdã', 'Brasilia', 'Bruxelas']

  constructor() { }

  ngOnInit(): void {
  }

  exibirCapital(pos:number):void{
    alert(this.capitais[pos]);
  }

}
