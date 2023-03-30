import { Injectable } from '@angular/core';
import { IContato } from '../interfaces/IContato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  public contato!: IContato;

  constructor() {}

  setContato(contato: IContato) {
    this.contato = contato;
  }

  getContato(): IContato {
    return this.contato;
  }
}
