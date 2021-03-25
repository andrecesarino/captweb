import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proposta-alerta',
  templateUrl: './proposta-alerta.component.html',
  styleUrls: ['./proposta-alerta.component.css']
})
export class PropostaAlertaComponent implements OnInit {

  @Input() proposta;
  constructor() { }
  @Output() notify = new EventEmitter();

  ngOnInit() {
  }

}