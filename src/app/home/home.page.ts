import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IContato } from '../interfaces/IContato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  private contatos: IContato[] = [
    {
      foto: 'https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png',
      nome: 'Luffy',
      email: 'luffy@gmail.com',
      id: '(18) 98103-3318'
    },
    {
      foto: 'https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2023/02/sanji-one-piece-1024x683.webp',
      nome: 'Sanji',
      email: 'sanji@yahoo.com.br',
      id: '(14) 98258-6928'
    },
    {
      foto: 'https://static.wikia.nocookie.net/one-piece-br/images/a/a7/20111128142437%21Brook.jpg/revision/latest?cb=20140329173158&path-prefix=pt',
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
    {
      foto: 'https://i.pinimg.com/736x/e6/42/70/e642702130ac2eb11967d3f7b87cc13d.jpg',
      nome: 'Yamato',
      email: 'yamato@gmail.com',
      id: '(13) 99915-8586'
    },
  ];

  constructor() {}
}
