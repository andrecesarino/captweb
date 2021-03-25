import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PropostaListaComponent } from './proposta-lista/proposta-lista.component';
import { PropostaAlertaComponent } from './proposta-alerta/proposta-alerta.component';
import { PropostaDetalhesComponent } from './proposta-detalhes/proposta-detalhes.component';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PropostaListaComponent },
      { path: 'propostas/:propostaId', component: PropostaDetalhesComponent},
      { path: 'carrinho', component: CarrinhoComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PropostaListaComponent,
    PropostaAlertaComponent,
    PropostaDetalhesComponent,
    CarrinhoComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CarrinhoService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/