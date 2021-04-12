import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { investidores } from "../investidores";

@Component({
  selector: "app-listar-investidor",
  templateUrl: "./listar-investidor.component.html",
  styleUrls: ["./listar-investidor.component.css"]
})
export class ListarInvestidorComponent {
  investidores = investidores;
  constructor() {}

  ngOnInit() {}
}
