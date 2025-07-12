import { Injectable } from '@angular/core';

export interface MenuItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {}

  getItems(): Array<MenuItem> {
    const menu: Array<MenuItem> = [
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
