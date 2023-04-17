import { ReactNode, createContext, useReducer, useState } from 'react'
import { coffeeList } from '../assets/coffeeList'

export interface Cart {
  name: string
  price: number
  image: string
  numberOfItems: number
}

export interface CoffeeListProps {
  coffeeItem: {
    name: string
    type: string[]
    description: string
    price: number
    image: string
    numberOfItems: number
  }
}

interface CartContextType {
  numberOfItems: number
  numberOfTotalItems: number
  cartItems: Cart[]
  coffeeItems: CoffeeListProps[]
  setNumberOfItems: (items: number) => void
  removeItemFromCart: (name: string) => void
  addItem: (name: string) => void
  deleteItem: (name: string) => void
  removeItem: (name: string) => void
  addItemToCart: (name: string, newItem: {}) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [coffeeItemsState, dispatch] = useReducer(
    (state: any, action: any) => {
      if (action.type === 'ADD_ITEM') {
        return {
          ...state,
          numberOfTotalItems: state.numberOfTotalItems + 1,
          coffeeItems: state.coffeeItems.map((item) => {
            if (item.name === action.name) {
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
      if (action.type === 'DELETE_ITEM') {
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
            if (item.name === action.name) {
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
      if (action.type === 'REMOVE_ITEM_FROM_CART') {
        const currentNumberOfItems = state.coffeeItems.filter(
          (item) => item.name === action.name,
        )
        return {
          ...state,
          numberOfTotalItems:
            state.numberOfTotalItems - currentNumberOfItems[0].numberOfItems,
          coffeeItems: state.coffeeItems.map((item) => {
            if (item.name === action.name) {
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
      if (action.type === 'ADD_ITEM_TO_CART') {
        if (
          state.cartItems.find((item: any) => item.name === action.newItem.name)
        ) {
          return {
            ...state,
            cartItems: state.cartItems.map((item: any, index: number) => {
              if (item.name === action.name) {
                state.cartItems[index] = action.newItem
              }
              return state.cartItems[index]
            }),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.newItem],
          }
        }
      }

      return state
    },
    { coffeeItems: coffeeList, numberOfTotalItems: 0, cartItems: [] },
  )
  const { coffeeItems, numberOfTotalItems, cartItems } = coffeeItemsState
  function addItem(name: string) {
    dispatch({
      type: 'ADD_ITEM',
      name,
    })
  }

  function deleteItem(name: string) {
    dispatch({
      type: 'DELETE_ITEM',
      name,
    })
  }

  function removeItem(name: string) {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      name,
    })
  }
  function addItemToCart(name: string, newItem: {}) {
    console.log('item to cart')
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      name,
      newItem,
    })
  }
  return (
    <CartContext.Provider
      value={{
        coffeeItems,
        numberOfItems,
        setNumberOfItems,
        numberOfTotalItems,
        cartItems,
        addItem,
        deleteItem,
        removeItem,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
