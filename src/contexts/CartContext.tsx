import { ReactNode, createContext, useReducer, useState } from 'react'

export interface Cart {
  name: string
  price: number
  image: string
  numberOfItems: number
}

interface CartContextType {
  numberOfItems: number
  numberOfTotalItems: number
  cartItems: Cart[]
  setNumberOfItems: (items: number) => void
  setNumberOfTotalItems: (items: number) => void
  setCartItems: (items: []) => void
  dispatch: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [numberOfTotalItems, setNumberOfTotalItems] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [cart, dispatch] = useReducer((state: Cart[], action: any) => {
    console.log(action)
    console.log(state)
    return state
  }, [])

  return (
    <CartContext.Provider
      value={{
        numberOfItems,
        setNumberOfItems,
        numberOfTotalItems,
        setNumberOfTotalItems,
        cartItems,
        setCartItems,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
