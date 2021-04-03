import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-investidor',
  templateUrl: './cadastro-investidor.component.html',
  styleUrls: ['./cadastro-investidor.component.css']
})
export class CadastroInvestidorComponent implements OnInit {
   ngOnInit() {
  }

  //items = this.getItems();
  
  checkoutForm = this.formBuilder.group({
    nome: '',
    endLogradouro: '',
  });

  constructor(

  private formBuilder: FormBuilder,

  ) { }

  onSubmit(): void{

    console.warn('Preenchimento submetido.',this.checkoutForm.value);
  } 

}