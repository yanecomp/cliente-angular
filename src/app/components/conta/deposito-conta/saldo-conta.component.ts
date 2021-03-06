import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { ContaService } from '../conta.service';
import { Conta } from '../conta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-saldo-conta',
  templateUrl: './saldo-conta.component.html',
  styleUrls: ['./saldo-conta.component.css']
})
export class SaldoContaComponent implements OnInit {
  conta: Conta;
  displayedColumns = ['id', 'nome', 'cpf', 'saldo', 'action']

  constructor(private contaService: ContaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {     
  }

  pesquisar(): void {
    const codConta = (<HTMLInputElement>document.getElementById("conta")).value;
    console.log("conta: "+codConta);
    this.contaService.getContaByCodigo(codConta).subscribe((conta) => {
      this.router.navigate(['conta/deposito/'+conta.id])
    });
  }

  cancelar(): void {
    this.router.navigate(['/conta'])
  }

}
