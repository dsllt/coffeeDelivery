import { AddressFormDataProps } from '../../contexts/CartContext'
import { Cart } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  GET_CART_FORM = 'GET_CART_FORM',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  RESET_NUMBER_OF_ITEMS = 'RESET_NUMBER_OF_ITEMS',
}

export type Action =
  | { type: ActionTypes.ADD_ITEM; payload: { name: string } }
  | { type: ActionTypes.DELETE_ITEM; payload: { name: string } }
  | { type: ActionTypes.REMOVE_ITEM_FROM_CART; payload: { name: string } }
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: { name: string; newItem: Cart }
    }
  | { type: ActionTypes.GET_CART_FORM; payload: { data: AddressFormDataProps } }
  | {
      type: ActionTypes.SET_PAYMENT_METHOD
      payload: { paymentMethod: string }
    }
  | {
      type: ActionTypes.RESET_NUMBER_OF_ITEMS
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

export function getCartFormAction(data: AddressFormDataProps): Action {
  return {
    type: ActionTypes.GET_CART_FORM,
    payload: { data },
  }
}

export function setPaymentMethodAction(paymentMethod: string): Action {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: { paymentMethod },
  }
}

export function resetNumberOfItemsAction(): Action {
  return {
    type: ActionTypes.RESET_NUMBER_OF_ITEMS,
  }
}
