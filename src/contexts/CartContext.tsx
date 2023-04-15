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
  dispatch: () => void
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
  const [coffeeItems, setCoffeeItems] = useState(coffeeList)
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [numberOfTotalItems, setNumberOfTotalItems] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [cart, dispatch] = useReducer((state: Cart[], action: any) => {
    console.log(action)
    console.log(state)
    return state
  }, [])

  function addItem(name: string) {
    const updatedCoffeeItems = coffeeItems
    // eslint-disable-next-line array-callback-return
    updatedCoffeeItems.map((item) => {
      if (item.name === name) {
        item.numberOfItems += 1
      }
    })
    setCoffeeItems(updatedCoffeeItems)
    setNumberOfTotalItems(numberOfTotalItems + 1)
  }

  function deleteItem(numberOfItems: number, name: string) {
    if (numberOfItems > 0) {
      const updatedCoffeeItems = coffeeItems
      // eslint-disable-next-line array-callback-return
      updatedCoffeeItems.map((item) => {
        if (item.name === name) {
          item.numberOfItems -= 1
        }
      })
      setCoffeeItems(updatedCoffeeItems)
      setNumberOfTotalItems(numberOfTotalItems - 1)
    } else {
      return 0
    }
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
        dispatch,
        addItem,
        deleteItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
