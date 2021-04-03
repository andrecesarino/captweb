import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-investidor',
  templateUrl: './cadastro-investidor.component.html',
  styleUrls: ['./cadastro-investidor.component.css']
})
export class CadastroInvestidorComponent implements OnInit {

  constructor(

  private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
  }

}