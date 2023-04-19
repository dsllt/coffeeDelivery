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
}

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

// type Action = {
//   type: ActionTypes
//   payload: {
//     name: string
//     newItem: Cart
//   }
// }
type Action =
  | { type: ActionTypes.ADD_ITEM; payload: { name: string } }
  | { type: ActionTypes.DELETE_ITEM; payload: { name: string } }
  | { type: ActionTypes.REMOVE_ITEM_FROM_CART; payload: { name: string } }
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: { name: string; newItem: Cart }
    }

export function cartItemsReducer(state: CartItemsState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      return {
        ...state,
        numberOfTotalItems: state.numberOfTotalItems + 1,
        coffeeItems: state.coffeeItems.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              numberOfItems: item.numberOfItems + 1,
            }
          } else {
            return item
          }
        }),
      }
    }
    case ActionTypes.DELETE_ITEM: {
      let quantifyItems
      if (state.numberOfTotalItems > 0) {
        quantifyItems = state.numberOfTotalItems - 1
      } else {
        quantifyItems = 0
      }
      return {
        ...state,
        numberOfTotalItems: quantifyItems,
        coffeeItems: state.coffeeItems.map((item) => {
          if (item.name === action.payload.name) {
            if (item.numberOfItems > 0) {
              return {
                ...item,
                numberOfItems: item.numberOfItems - 1,
              }
            } else {
              return {
                ...item,
                numberOfItems: 0,
              }
            }
          } else {
            return item
          }
        }),
      }
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const currentNumberOfItems = state.coffeeItems.filter(
        (item) => item.name === action.payload.name,
      )
      return {
        ...state,
        numberOfTotalItems:
          state.numberOfTotalItems - currentNumberOfItems[0].numberOfItems,
        coffeeItems: state.coffeeItems.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              numberOfItems: 0,
            }
          } else {
            return item
          }
        }),
      }
    }
    case ActionTypes.ADD_ITEM_TO_CART: {
      if (
        state.cartItems.find(
          (item: Cart) => item.name === action.payload.newItem.name,
        )
      ) {
        return {
          ...state,
          cartItems: state.cartItems.map((item: Cart, index: number) => {
            if (item.name === action.payload.name) {
              state.cartItems[index] = action.payload.newItem
            }
            return state.cartItems[index]
          }),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.newItem],
        }
      }
    }
    default:
      return state
  }
}
