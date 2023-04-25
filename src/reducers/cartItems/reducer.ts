import { produce } from 'immer'
import { Action, ActionTypes } from './action'
import { AddressFormDataProps } from '../../contexts/CartContext'
import { coffeeList } from '../../assets/coffeeList'

export interface CoffeeItem {
  name: string
  type: string[]
  description: string
  price: string
  image: string
  numberOfItems: number
}

export interface Cart {
  name: string
  price: string
  image: string
  numberOfItems: number
}

interface CartItemsState {
  cartItems: Cart[]
  coffeeItems: CoffeeItem[]
  numberOfItems: number
  numberOfTotalItems: number
  totalItems: number
  selectedPaymentMethod: string
  addressForm: AddressFormDataProps
}

export function cartItemsReducer(state: CartItemsState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const itemIndex = state.coffeeItems.findIndex((item) => {
        return item.name === action.payload.name
      })
      if (itemIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.numberOfTotalItems += 1
        draft.coffeeItems[itemIndex].numberOfItems += 1
      })
    }

    case ActionTypes.DELETE_ITEM: {
      // Verify total total number of items in the cart
      let quantifyTotalItems: number
      if (state.numberOfTotalItems > 0) {
        quantifyTotalItems = state.numberOfTotalItems - 1
      } else {
        quantifyTotalItems = 0
      }
      const itemIndex = state.coffeeItems.findIndex((item) => {
        return item.name === action.payload.name
      })

      if (itemIndex < 0) {
        return state
      }

      // Verify total total number of items for the item
      let itemTotal = state.coffeeItems[itemIndex].numberOfItems
      if (itemTotal > 0) {
        itemTotal -= 1
      } else {
        itemTotal = 0
      }

      return produce(state, (draft) => {
        draft.numberOfTotalItems = quantifyTotalItems
        draft.coffeeItems[itemIndex].numberOfItems = itemTotal
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const currentNumberOfItems = state.coffeeItems.filter(
        (item) => item.name === action.payload.name,
      )
      const itemIndex = state.coffeeItems.findIndex((item) => {
        return item.name === action.payload.name
      })

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.numberOfTotalItems =
          draft.numberOfTotalItems - currentNumberOfItems[0].numberOfItems
        draft.coffeeItems[itemIndex].numberOfItems = 0
        draft.totalItems = draft.numberOfTotalItems
      })
    }

    case ActionTypes.ADD_ITEM_TO_CART: {
      const itemIndex = state.coffeeItems.findIndex((item) => {
        return item.name === action.payload.name
      })

      if (itemIndex < 0) {
        return produce(state, (draft) => {
          draft.cartItems.push(action.payload.newItem)
          draft.totalItems = state.numberOfTotalItems
        })
      }

      return produce(state, (draft) => {
        draft.cartItems[itemIndex] = action.payload.newItem
        draft.totalItems = state.numberOfTotalItems
      })
    }

    case ActionTypes.GET_CART_FORM:
      return produce(state, (draft) => {
        draft.addressForm = action.payload.data
      })

    case ActionTypes.SET_PAYMENT_METHOD:
      return produce(state, (draft) => {
        draft.selectedPaymentMethod = action.payload.paymentMethod
      })

    case ActionTypes.RESET_NUMBER_OF_ITEMS:
      return produce(state, (draft) => {
        draft.coffeeItems = coffeeList
        draft.numberOfTotalItems = 0
      })

    default:
      return state
  }
}
