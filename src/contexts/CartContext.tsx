import { ReactNode, createContext, useReducer, useState } from 'react'
import { coffeeList } from '../assets/coffeeList'
import { Cart, cartItemsReducer } from '../reducers/cartItems/reducer'
import {
  addItemAction,
  addItemToCartAction,
  deleteItemAction,
  removeItemAction,
} from '../reducers/cartItems/action'

export interface CoffeeListProps {
  coffeeItem: {
    name: string
    type: string[]
    description: string
    price: string
    image: string
    numberOfItems: number
  }
}

export interface CoffeeItemProps {
  name: string
  type: string[]
  description: string
  price: string
  image: string
  numberOfItems: number
}

interface CartContextType {
  numberOfItems: number
  numberOfTotalItems: number
  cartItems: Cart[]
  coffeeItems: CoffeeItemProps[]
  setNumberOfItems: (items: number) => void
  addItem: (name: string) => void
  deleteItem: (name: string) => void
  removeItem: (name: string) => void
  addItemToCart: (name: string, newItem: Cart) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const initialState = {
  cartItems: [],
  coffeeItems: coffeeList,
  numberOfItems: 0,
  numberOfTotalItems: 0,
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [coffeeItemsState, dispatch] = useReducer(
    cartItemsReducer,
    initialState,
  )

  const { coffeeItems, numberOfTotalItems, cartItems } = coffeeItemsState

  function addItem(name: string) {
    dispatch(addItemAction(name))
  }

  function deleteItem(name: string) {
    dispatch(deleteItemAction(name))
  }

  function removeItem(name: string) {
    dispatch(removeItemAction(name))
  }

  function addItemToCart(name: string, newItem: Cart) {
    console.log('item to cart')
    dispatch(addItemToCartAction(name, newItem))
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
