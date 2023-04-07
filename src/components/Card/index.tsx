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
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { SelectItems } from '../SelectItems'
export function Card() {
  return (
    <CardContainer>
      <CoffeePicture src={americanoCoffeeImage} />
      <CoffeeCategory>
        <span> tradicional</span>
      </CoffeeCategory>
      <CoffeeDescription>
        <h1>Expresso Tradicional</h1>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeDescription>
      <CoffeeCheckout>
        <span>R$ </span> <h1>9,90</h1>
        <SelectItems />
        <CartButton>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </CoffeeCheckout>
    </CardContainer>
  )
}
