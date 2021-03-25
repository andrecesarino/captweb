import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { propostas } from '../propostas';
import {CarrinhoService } from '../carrinho.service'

@Component({
  selector: 'app-proposta-detalhes',
  templateUrl: './proposta-detalhes.component.html',
  styleUrls: ['./proposta-detalhes.component.css']
})
export class PropostaDetalhesComponent implements OnInit {

  proposta;
  
  constructor(
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService
  ) { }

  adicionarCarrinho (proposta)
  {
    this.carrinhoService.adicionarCarrinho(proposta);
    window.alert('Sua proposta foi adicionada ao carrinho!');
  }

  ngOnInit() {
  // First get the proposta id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const propostaIdFromRoute = Number(routeParams.get('propostaId'));

  // Find the proposta that correspond with the id provided in route.
  this.proposta = propostas.find(proposta => proposta.id === propostaIdFromRoute);
}

}