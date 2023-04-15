import { CartButton, HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { numberOfTotalItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
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
