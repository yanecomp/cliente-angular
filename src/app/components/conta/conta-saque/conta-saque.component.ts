import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Conta } from '../conta.model';

@Component({
  selector: 'app-conta-saque',
  templateUrl: './conta-saque.component.html',
  styleUrls: ['./conta-saque.component.css']
})
export class ContaSaqueComponent implements OnInit {
  conta: Conta;
  displayedColumns = ['id', 'nome', 'cpf', 'saldo', 'action']

  constructor(private contaService: ContaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contaService.getConta(id).subscribe(conta => {
      this.conta = conta
    });      
  }

  sacar(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const valor = (<HTMLInputElement>document.getElementById("valor")).value;

    this.contaService.sacar(id, valor).subscribe(() => {
      this.contaService.showMessage("Saque realizado com sucesso!")
      this.router.navigate(['/conta'])
    });
  }

  cancelar(): void {
    this.router.navigate(['/conta'])
  }

}
