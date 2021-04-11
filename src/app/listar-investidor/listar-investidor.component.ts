import { Component, OnInit } from '@angular/core';
import { investidores } from '../investidores';

@Component({
  selector: 'app-listar-investidor',
  templateUrl: './listar-investidor.component.html',
  styleUrls: ['./listar-investidor.component.css']
})
export class ListarInvestidorComponent implements OnInit {

  investidores = investidores;
  constructor() { }

  ngOnInit() {
  }

}