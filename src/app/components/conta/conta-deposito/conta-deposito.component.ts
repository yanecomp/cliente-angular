import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { ContaService } from '../conta.service';
import { Conta } from '../conta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-conta-deposito',
  templateUrl: './conta-deposito.component.html',
  styleUrls: ['./conta-deposito.component.css']
})
export class ContaDepositoComponent implements OnInit {
  conta: Conta;
  displayedColumns = ['id', 'nome', 'cpf', 'saldo', 'action']

  constructor(private contaService: ContaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contaService.getConta(id).subscribe(conta => {
      this.conta = conta
    });
      
  }

  depositar(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const valor = (<HTMLInputElement>document.getElementById("valor")).value;
    this.contaService.depositar(id, valor).subscribe(() => {
      this.contaService.showMessage("Depósito realizado com sucesso!")
      this.router.navigate(['/conta'])
    });
  }

  cancelar(): void {
    this.router.navigate(['/conta'])
  }

}
