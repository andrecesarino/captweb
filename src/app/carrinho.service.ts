import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  propostas = [];

  adicionarCarrinho(proposta) {
    this.propostas.push(proposta);
  }

  pegarPropostas() {
    return this.propostas;
  }

  limparCarrinho() {
    this.propostas = [];
    return this.propostas;
  }
}