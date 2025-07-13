import { Component } from '@angular/core';
import { MenuService } from '../services/menu';
import { Menu } from '../models/menu'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) { }

  menuStatus = 'closed';

  menuItems?: Array<Menu>;

  ngOnInit() {
     const menu = this.menuService.getItems();

     this.menuItems = menu;
  }
   
  menuClik() {
    
    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');
  }
}


