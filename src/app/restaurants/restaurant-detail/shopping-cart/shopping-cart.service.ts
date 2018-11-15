import { CartItem } from "./CartItem";
import { MenuItem } from "../menu-item/menu-item";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {
    itens: CartItem[] = []

    clear() {
        this.itens = []
    }

    total(): number {
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

    removeItem(item:CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1)
    }

    addItem(item: MenuItem) {
        let foundItem = this.itens.find(mItem => mItem.menuItem.id === item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.itens.push(new CartItem(item))
        }
    }
}