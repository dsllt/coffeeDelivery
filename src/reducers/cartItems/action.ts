import { Cart } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export type Action =
  | { type: ActionTypes.ADD_ITEM; payload: { name: string } }
  | { type: ActionTypes.DELETE_ITEM; payload: { name: string } }
  | { type: ActionTypes.REMOVE_ITEM_FROM_CART; payload: { name: string } }
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: { name: string; newItem: Cart }
    }

export function addItemAction(name: string): Action {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { name },
  }
}

export function deleteItemAction(name: string): Action {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: { name },
  }
}
export function removeItemAction(name: string): Action {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { name },
  }
}
export function addItemToCartAction(name: string, newItem: Cart): Action {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { name, newItem },
  }
}
