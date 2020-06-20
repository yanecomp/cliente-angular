import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

import { ContaOperacoesComponent } from './views/conta-operacoes/conta-operacoes.component';
import { SaldoComponent } from './components/conta/conta-saldo/saldo.component';

import { ContaService } from './components/conta/conta.service';
import { ContaDepositoComponent } from './components/conta/conta-deposito/conta-deposito.component';
import { ContaSaqueComponent } from './components/conta/conta-saque/conta-saque.component';
import { SaldoContaComponent } from './components/conta/deposito-conta/saldo-conta.component';
import { SaqueContaComponent } from './components/conta/saque-conta/saque-conta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContaOperacoesComponent,
    SaldoComponent,
    ContaDepositoComponent,
    ContaSaqueComponent,
    SaldoContaComponent,
    SaqueContaComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }, ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
