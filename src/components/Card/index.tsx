import {
  CardContainer,
  CartButton,
  CoffeeCategory,
  CoffeeCheckout,
  CoffeeDescription,
  CoffeePicture,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { SelectItems } from '../SelectItems'
import { useContext, useState } from 'react'
import { Cart, CartContext } from '../../contexts/CartContext'

interface CoffeeListProps {
  coffeeItem: {
    name: string
    type: string[]
    description: string
    price: number
    image: string
  }
}

export function Card({ coffeeItem }: CoffeeListProps) {
  const { setNumberOfTotalItems, numberOfTotalItems, cartItems, setCartItems } =
    useContext(CartContext)
  const [numberOfItems, setNumberOfItems] = useState(0)
  function handleAddItemToCart() {
    const newItem: Cart = {
      name: coffeeItem.name,
      price: coffeeItem.price,
      image: coffeeItem.image,
      numberOfItems,
    }

    const cartItemsCheck: any = cartItems

    if (cartItemsCheck.find((item: Cart) => item.name === newItem.name)) {
      cartItemsCheck.map((item: Cart, index: number) => {
        if (item.name === coffeeItem.name) {
          cartItemsCheck[index] = newItem
        }
        return cartItemsCheck[index]
      })
      setCartItems(cartItemsCheck)
    } else {
      setCartItems((state: Cart[]) => [...state, newItem])
    }
  }

  function addItem() {
    setNumberOfItems(numberOfItems + 1)
    setNumberOfTotalItems(numberOfTotalItems + 1)
  }
  function deleteItem() {
    if (numberOfItems > 0) {
      setNumberOfItems(numberOfItems - 1)
      setNumberOfTotalItems(numberOfTotalItems - 1)
    } else {
      return 0
    }
  }
  return (
    <CardContainer>
      <CoffeePicture src={coffeeItem.image} />
      <CoffeeCategory>
        {coffeeItem.type.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </CoffeeCategory>
      <CoffeeDescription>
        <h1>{coffeeItem.name}</h1>
        <span>{coffeeItem.description}</span>
      </CoffeeDescription>
      <CoffeeCheckout>
        <span>R$ </span> <h1>{coffeeItem.price}</h1>
        <SelectItems
          addItem={addItem}
          deleteItem={deleteItem}
          numberOfItems={numberOfItems}
        />
        <CartButton onClick={handleAddItemToCart}>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </CoffeeCheckout>
    </CardContainer>
  )
}
