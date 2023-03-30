import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContatosService } from '../services/contatos.service';
import { IContato } from '../interfaces/IContato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ContatoPage implements OnInit {

  public contato!: IContato;

  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    this.contato = this.contatosService.getContato();
  }

}
