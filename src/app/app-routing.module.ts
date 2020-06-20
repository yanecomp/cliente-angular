import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ContaOperacoesComponent } from "./views/conta-operacoes/conta-operacoes.component";
import { ContaDepositoComponent } from './components/conta/conta-deposito/conta-deposito.component';
import { ContaSaqueComponent } from './components/conta/conta-saque/conta-saque.component';
import { SaldoContaComponent } from './components/conta/deposito-conta/saldo-conta.component';
import { SaqueContaComponent } from './components/conta/saque-conta/saque-conta.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "conta", component: ContaOperacoesComponent },
  { path: "conta/deposito/:id", component: ContaDepositoComponent },
  { path: "conta/saque/:id", component: ContaSaqueComponent },
  { path: "deposito", component: SaldoContaComponent },
  { path: "saque", component: SaqueContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
