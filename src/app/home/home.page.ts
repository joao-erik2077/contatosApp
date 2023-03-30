import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IContato } from '../interfaces/IContato';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  public contatos: IContato[] = [
    {
      foto: 'https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png',
      nome: 'Luffy',
      email: 'luffy@gmail.com',
      id: '(18) 98103-3318'
    },
    {
      foto: 'https://animes.olanerd.com/wp-content/uploads/2022/09/1662321862_Quem-sera-o-oponente-final-de-Sanji-1200x900.jpg',
      nome: 'Sanji',
      email: 'sanji@yahoo.com.br',
      id: '(14) 98258-6928'
    },
    {
      foto: 'https://gartic.com.br/imgs/mural/1b/1bielzitoo/brook-one-piece.png',
      nome: 'Brook',
      email: 'brook23@gmail.com',
      id: '(11) 96802-2984'
    },
    {
      foto: 'https://epipoca.com.br/wp-content/uploads/2022/11/robin-os-jovens-titas-1200x900.jpg',
      nome: 'Robin',
      email: 'robin@batmail.com',
      id: '(11) 98574-2219'
    },
    {
      foto: 'https://conteudo.imguol.com.br/c/entretenimento/fa/2019/08/09/a-mascara-do-zorro-1565368883614_v2_1x1.jpg',
      nome: 'Zorro',
      email: 'zorro@gmail.com',
      id: '(19) 98662-4077'
    },
  ];

  constructor(private router: Router, private contatosService: ContatosService) {}

  goToContato(contato: IContato) {
    this.contatosService.setContato(contato);
    this.router.navigateByUrl('/contato');
  }
}
