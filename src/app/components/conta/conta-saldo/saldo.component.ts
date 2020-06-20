import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Conta } from '../conta.model';
import {Response} from '../response';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css'],
  providers: [ContaService]
})
export class SaldoComponent implements OnInit {

  public contas: Conta[]
  displayedColumns = ['id', 'nome', 'cpf', 'saldo', 'action']

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.contaService.getContas().subscribe(contas => {
      this.contas = contas
      console.log(contas)
    })
  }

}
