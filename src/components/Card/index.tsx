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
import { useContext } from 'react'
import { Cart, CartContext, CoffeeListProps } from '../../contexts/CartContext'



export function Card({ coffeeItem }: CoffeeListProps) {
  const { cartItems, setCartItems, addItem, deleteItem } =
    useContext(CartContext)

  function handleAddItemToCart() {
    const newItem: Cart = {
      name: coffeeItem.name,
      price: coffeeItem.price,
      image: coffeeItem.image,
      numberOfItems: coffeeItem.numberOfItems,
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

  function handleAddItem() {
    addItem(coffeeItem.name)
  }
  function handleDeleteItem() {
    deleteItem(coffeeItem.numberOfItems, coffeeItem.name)
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
          addItem={handleAddItem}
          deleteItem={handleDeleteItem}
          numberOfItems={coffeeItem.numberOfItems}
        />
        <CartButton onClick={handleAddItemToCart}>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </CoffeeCheckout>
    </CardContainer>
  )
}
