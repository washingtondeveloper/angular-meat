import { Component, OnInit } from '@angular/core';
import { RadioModel } from 'app/shared/radio/radio-model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/CartItem';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioModel[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Debito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' },
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem): void {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem): void {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem): void {
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        console.log(`Compra concluída: ${orderId}`)
        this.orderService.clear()
      })
  }

}
