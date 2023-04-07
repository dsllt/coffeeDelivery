import { CartButton, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <div>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartButton>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
