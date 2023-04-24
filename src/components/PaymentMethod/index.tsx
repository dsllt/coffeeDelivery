import { Bank, CreditCard, Money } from 'phosphor-react'
import {
  PaymentMethodContainer,
  PaymentMethodProps,
  PaymentMethodVariant,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

function defineMethod(variant: PaymentMethodVariant) {
  if (variant === 'credito') {
    return (
      <>
        <CreditCard size={16} weight="fill" />
        <span>cartão de crédito</span>
      </>
    )
  } else if (variant === 'debito') {
    return (
      <>
        <Bank size={16} weight="fill" />
        <span>cartão de débito</span>
      </>
    )
  } else if (variant === 'dinheiro') {
    return (
      <>
        <Money size={16} weight="fill" />
        <span>dinheiro</span>
      </>
    )
  }
}

export function PaymentMethod({ variant }: PaymentMethodProps) {
  const { selectedPaymentMethod, setPaymentMethod } = useContext(CartContext)
  function handleSelectPaymentMethod() {
    let paymentMethod
    if (variant === 'debito') {
      paymentMethod = 'Cartão de Débito'
    } else if (variant === 'credito') {
      paymentMethod = 'Cartão de Crédito'
    } else {
      paymentMethod = 'Dinheiro'
    }
    setPaymentMethod(paymentMethod)
  }
  return (
    <PaymentMethodContainer
      variant={variant}
      type="button"
      onClick={handleSelectPaymentMethod}
    >
      {defineMethod(variant)}
    </PaymentMethodContainer>
  )
}
