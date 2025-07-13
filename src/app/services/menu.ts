import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {}

  getItems(): Array<Menu> {
    const menu: Array<Menu> = [
      {
        name: 'Início',
        url: '#banner'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'Habilidades',
        url: '#skills'
      },
      {
        name: 'Projetos',
        url: '#projects'
      },
      {
        name: 'Contatos',
        url: '#contact'
      }
    ];

    return menu;
  }
}
