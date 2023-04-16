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
  setCartItems: (items: []) => void
  removeItemFromCart: (name: string) => void
  addItem: (name: string) => void
  deleteItem: (name: string) => void
  removeItem: (name: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [coffeeItemsState, dispatch] = useReducer(
    (state: any, action: any) => {
      if (action.type === 'ADD_ITEM') {
        return {
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

      return state
    },
    { coffeeItems: coffeeList, numberOfTotalItems: 0 },
  )
  const { coffeeItems, numberOfTotalItems } = coffeeItemsState
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

  return (
    <CartContext.Provider
      value={{
        coffeeItems,
        numberOfItems,
        setNumberOfItems,
        numberOfTotalItems,
        cartItems,
        setCartItems,
        addItem,
        deleteItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
