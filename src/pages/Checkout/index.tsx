/* eslint-disable react/no-unknown-property */
import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react'
import {
  AddressForm,
  AddressFormContainer,
  AddressFormHeader,
  CartItemsContainer,
  CheckoutContainer,
  ConfirmOrderButton,
  OrderCart,
  OrderForm,
  PaymentForm,
  PaymentFormHeader,
  PaymentMethodSelection,
  PriceContainer,
  TotalContainer,
} from './styles'
import { PaymentMethod } from '../../components/PaymentMethod'
import { CartItem } from '../../components/CartItem'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { coffeeItems, cartItems } = useContext(CartContext)
  const [displayedTotalValue, setDisplayedTotalValue] = useState('')
  const [
    displayedTotalValueWithDeliveryFee,
    setDisplayedTotalValueWithDeliveryFee,
  ] = useState('')

  const deliveryFee = 3.5
  useEffect(() => {
    let totalValue = 0
    coffeeItems
      .filter((item) => item.numberOfItems > 0)
      // eslint-disable-next-line array-callback-return
      .map((item) => {
        if (item != null) {
          const price = parseFloat(item.price.replace(',', '.'))
          const numberOfCurrentItem = item.numberOfItems
          totalValue += price * numberOfCurrentItem
        }
      })
    setDisplayedTotalValue(totalValue.toFixed(2).toString().replace('.', ','))
    setDisplayedTotalValueWithDeliveryFee(
      (totalValue + deliveryFee).toFixed(2).toString().replace('.', ','),
    )
  }, [coffeeItems])
  return (
    <CheckoutContainer>
      <OrderForm>
        <h1>Complete seu pedido</h1>
        <AddressFormContainer>
          <AddressFormHeader>
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressFormHeader>
          <AddressForm>
            <input type="text" placeholder="CEP" className="mediumInput" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" className="mediumInput" />
              <div className="complementInput" optional-text="Opcional">
                <input type="text" placeholder="Complemento" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Bairro" className="mediumInput" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" className="smallInput" />
            </div>
          </AddressForm>
        </AddressFormContainer>

        <PaymentForm>
          <PaymentFormHeader>
            <CurrencyDollarSimple size={22} />
            <div>
              <h1>Pagamento</h1>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentFormHeader>
          <PaymentMethodSelection>
            <PaymentMethod variant="credito" />
            <PaymentMethod variant="debito" />
            <PaymentMethod variant="dinheiro" />
          </PaymentMethodSelection>
        </PaymentForm>
      </OrderForm>

      <OrderCart>
        <h1>Cafés selecionados</h1>
        <CartItemsContainer>
          {coffeeItems
            .filter((item) => item.numberOfItems > 0)
            .map((item, index) => (
              <CartItem coffeeItem={item} key={index} />
            ))}
          <PriceContainer>
            <span>Total de itens</span>
            <span>R$ {displayedTotalValue}</span>
          </PriceContainer>
          <PriceContainer>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </PriceContainer>
          <TotalContainer>
            <span>Total</span>
            <span>R$ {displayedTotalValueWithDeliveryFee}</span>
          </TotalContainer>
          <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
        </CartItemsContainer>
      </OrderCart>
    </CheckoutContainer>
  )
}
