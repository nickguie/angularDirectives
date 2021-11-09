import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01ngfor',
  templateUrl: './ex01ngfor.component.html',
  styleUrls: ['./ex01ngfor.component.css']
})
export class Ex01ngforComponent implements OnInit {

  imgs = ['lulu.jpg', 'taric.jpg', 'zyra.jpg']

  constructor() { }

  ngOnInit(): void {
  }

  exibirNome(img:string):void{
    alert(img);
  }

}
