import { Action } from '@ngrx/store';
import { Item } from '../../item/item.component';

/*
 * NameSpace o "clase" la cual tiene los tipos de acciones
 **/
export namespace BasketActionTypes {
  export const ADD = '[Basket] add';
  export const REMOVE = '[Basket] remove';
}
/*
 * "clase" la cual se llamara desde el reducer para "hacer la logica de ADD"
 **/
export class BasketAddAction implements Action {
  readonly type = BasketActionTypes.ADD;
  public payload: Item;

  constructor(public item: Item) {
    this.payload = item;
  }
}
/*
 * "clase" la cual se llamara desde el reducer para "hacer la logica de REMOVE"
 **/
export class BasketRemoveAction implements Action {
  readonly type = BasketActionTypes.REMOVE;
  public payload: Item;

  constructor(public item: Item) {
    this.payload = item;
  }
}

export type BasketAction = BasketAddAction | BasketRemoveAction;
