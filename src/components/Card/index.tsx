import {
  CardContainer,
  CartButton,
  CoffeeCategory,
  CoffeeCheckout,
  CoffeeDescription,
  CoffeePicture,
  NumberOfItems,
} from './styles'
import americanoCoffeeImage from '../../assets/Americano.png'
import { ShoppingCart } from 'phosphor-react'
import { SelectItems } from '../SelectItems'

interface CoffeeListProps {
  coffeeItem: {
    name: string
    type: string[]
    description: string
    price: string
    image: string
  }
}
export function Card({ coffeeItem }: CoffeeListProps) {
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
        <SelectItems />
        <CartButton>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </CoffeeCheckout>
    </CardContainer>
  )
}
