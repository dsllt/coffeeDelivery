import {
  Coffee,
  CurrencyDollar,
  MapPin,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { MiniIconContainer, MiniIconVariant } from './styles'

interface MiniIconProps {
  variant: MiniIconVariant
}

function defineIcon(variant: MiniIconVariant) {
  if (variant === 'cart') {
    return <ShoppingCart size={16} weight="fill" />
  } else if (variant === 'timer') {
    return <Timer size={16} weight="fill" />
  } else if (variant === 'coffee') {
    return <Coffee size={16} weight="fill" />
  } else if (variant === 'package') {
    return <Package size={16} weight="fill" />
  } else if (variant === 'location') {
    return <MapPin size={16} weight="fill" />
  } else if (variant === 'money') {
    return <CurrencyDollar size={16} weight="fill" />
  }
}

export function MiniIcon({ variant }: MiniIconProps) {
  return (
    <MiniIconContainer variant={variant}>
      {defineIcon(variant)}
    </MiniIconContainer>
  )
}
