import { CartButton, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { numberOfTotalItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <div>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartButton to={'/checkout'}>
          <div>{numberOfTotalItems}</div>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
