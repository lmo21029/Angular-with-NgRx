import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.component';
import { Store, select } from '@ngrx/store';
import { AppState } from './ngrx/state/app.state';
import {
  BasketAddAction,
  BasketRemoveAction
} from './ngrx/actions/basket.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tabs-with-ngrx';
  items: Item[] = [];
  currentBasket: Item[];

  /*
   * En el constructor se añade la subcripcion del store a un "basket"
   * Y cuando se llama algun metodo abajo este dispara las acciones "add" y "remove"
   **/
  constructor(public store: Store<AppState>) {
    this.store.pipe(select(state => state.basket)).subscribe(basket => {
      if (basket && basket.items) {
        this.currentBasket = basket.items;
      }
    });
  }

  /*
   * Funcion que dispacha la ACCION "ADD"
   **/
  addItem(item: Item) {
    this.store.dispatch(new BasketAddAction(item));
  }
  /*
   * Funcion que dispacha la ACCION "REMOVE"
   **/
  removeItem(item: Item) {
    this.store.dispatch(new BasketRemoveAction(item));
  }

  /*
   * Inicializacion de ITEMS que se añadiran proximamente al array ITEMS
   * Esta Item es un objeto definido en la interface (./item)
   **/
  ngOnInit() {
    this.items.push(
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '2', name: 'Item 3' }
    );
  }
}
