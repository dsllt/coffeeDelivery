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
  setNumberOfTotalItems: (items: number) => void
  setCartItems: (items: []) => void
  setCoffeeItems: (items: []) => void
  removeItemFromCart: (name: string) => void
  addItem: (name: string) => void
  deleteItem: (numberOfItems: number, name: string) => void
  removeItem: (name: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeItemsF, setCoffeeItems] = useState(coffeeList)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [numberOfTotalItemsT, setNumberOfTotalItems] = useState(0)
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

      return state
    },
    { coffeeItems: coffeeList, numberOfTotalItems: 0 },
  )
  const { coffeeItems, numberOfTotalItems } = coffeeItemsState
  function addItem(name: string) {
    console.log(coffeeItems)
    dispatch({
      type: 'ADD_ITEM',
      name,
    })
    console.log(coffeeItemsState)
  }

  function deleteItem(numberOfItems: number, name: string) {
    dispatch({
      type: 'DELETE_ITEM',
      name,
    })
    console.log(coffeeItemsState)
  }

  function removeItem(name: string) {
    const updatedCoffeeItems = coffeeItems
    let currentNumberOfItems
    // eslint-disable-next-line array-callback-return
    updatedCoffeeItems.map((item) => {
      if (item.name === name) {
        currentNumberOfItems = item.numberOfItems
        item.numberOfItems = 0
      }
    })
    setCoffeeItems(updatedCoffeeItems)
    setNumberOfTotalItems(numberOfTotalItems - currentNumberOfItems)
  }

  return (
    <CartContext.Provider
      value={{
        coffeeItems,
        setCoffeeItems,
        numberOfItems,
        setNumberOfItems,
        numberOfTotalItems,
        setNumberOfTotalItems,
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
