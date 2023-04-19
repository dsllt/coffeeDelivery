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
import { CartContext, CoffeeListProps } from '../../contexts/CartContext'
import { Cart } from '../../reducers/cartItems'

export function Card({ coffeeItem }: CoffeeListProps) {
  const { addItem, deleteItem, addItemToCart } = useContext(CartContext)

  function handleAddItemToCart() {
    const newItem: Cart = {
      name: coffeeItem.name,
      price: coffeeItem.price,
      image: coffeeItem.image,
      numberOfItems: coffeeItem.numberOfItems,
    }

    addItemToCart(newItem.name, newItem)
  }

  function handleAddItem() {
    addItem(coffeeItem.name)
  }
  function handleDeleteItem() {
    deleteItem(coffeeItem.name)
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
