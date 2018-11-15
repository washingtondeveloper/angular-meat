import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  clear() {
    this.cartService.clear()
  }

  removeItem(item: any) {
    this.cartService.removeItem(item)
  }

  addItem(item: any) {
    this.cartService.addItem(item)
  }

  itens() : any[] {
    return this.cartService.itens
  }

  total(): number {
    return this.cartService.total()
  }

}
