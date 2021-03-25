import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  items = [];

  adicionarCarrinho(proposta) {
    this.items.push(proposta);
  }

  pegarItems() {
    return this.items;
  }

  limparCarrinho() {
    this.items = [];
    return this.items;
  }
}