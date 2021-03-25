import { Component } from '@angular/core';

import { propostas } from '../propostas';

@Component({
  selector: 'app-proposta-lista',
  templateUrl: './proposta-lista.component.html',
  styleUrls: ['./proposta-lista.component.css']
})
export class PropostaListaComponent {
  propostas = propostas;

  share() {
    window.alert('A proposta foi compartilhada!');
  }

  onNotify() {
    window.alert('Você será notificado quando a proposta for autorizada!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/