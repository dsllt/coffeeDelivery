import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

interface PaymentMethodProps {
  variant?: 'credito' | 'debito' | 'dinheiro'
}

function defineMethod(variant) {
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
  return (
    <PaymentMethodContainer variant={variant}>
      {defineMethod(variant)}
    </PaymentMethodContainer>
  )
}
