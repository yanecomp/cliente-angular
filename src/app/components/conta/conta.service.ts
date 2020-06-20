import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Conta } from '../conta/conta.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContaService {

  baseUrl = "http://localhost:8080/conta/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  /**CONSULTA UMA CONTA PELO ID */
  getConta(conta: string): Observable<Conta>{ 
    return this.http.get<Conta>(this.baseUrl + conta);
  }

    /**CONSULTA UMA CONTA PELO CÓDIGO DA CONTA   */
    getContaByCodigo(conta: string): Observable<Conta>{ 
      const url = this.baseUrl + "conta/";
      console.log("url: "+url);
      return this.http.get<Conta>(url + conta);
    }

  /**OBTÉM TODAS AS CONTAS */
  getContas(): Observable<Conta[]>{ 
    return this.http.get<Conta[]>(this.baseUrl);
  }

  /*updateConta(codigo: string, conta: Conta): Observable<Conta>{
    return this.http.patch<Conta>(this.baseUrl + codigo, conta);
  }*/

  depositar(codigo: string, valor: string): Observable<Conta>{
    //console.log(valor);
    const url = this.baseUrl + "depositar/";
    console.log(url);
    return this.http.post<Conta>(url + codigo +"/"+valor, valor);
  }

  sacar(codigo: string, valor: string): Observable<Conta>{
    //console.log(valor);
    const url = this.baseUrl + "sacar/";
    console.log(url);
    return this.http.post<Conta>(url + codigo +"/"+valor, valor);
  }

  showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
  }

}
