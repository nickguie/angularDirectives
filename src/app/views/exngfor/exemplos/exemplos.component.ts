import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.css']
})
export class ExemplosComponent implements OnInit {

  estados = ['SP', 'RJ', 'BA', 'PE', 'RS', 'ES'];

  jogos = ['Genshin Impact', 'Cyberpunk  2077', 'The Last Of Us Part II', 'Red Dead Redemption II', 'Among Us']
  notas = [82, 85, 93, 97, 83];

  constructor() { }

  ngOnInit(): void {
  }

}
