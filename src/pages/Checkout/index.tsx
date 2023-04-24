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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { NavLink } from 'react-router-dom'
import { setPaymentMethod } from '../../reducers/cartItems/action'

export function Checkout() {
  const { coffeeItems, getFormData, selectedPaymentMethod } =
    useContext(CartContext)
  const [displayedTotalValue, setDisplayedTotalValue] = useState('')
  const [
    displayedTotalValueWithDeliveryFee,
    setDisplayedTotalValueWithDeliveryFee,
  ] = useState('')
  const deliveryFee = 3.5

  const addressFormValidationSchema = zod.object({
    cep: zod.string().min(1).max(8, 'O CEP deve ter no máximo 8 caracteres'),
    address: zod.string().max(30, 'A rua deve ter no máximo 30 caracteres'),
    number: zod
      .string()
      .min(1)
      .max(4, 'O número deve ter no máximo 4 caracteres'),
    complement: zod.string().optional(),
    neighborhood: zod
      .string()
      .max(30, 'O bairro deve ter no máximo 30 caracteres'),
    city: zod.string().max(20, 'A cidade deve ter no máximo 20 caracteres'),
    state: zod.string().max(2, 'O estado deve ter no máximo 2 caracteres'),
  })

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(addressFormValidationSchema),
  })

  type AddressFormData = zod.infer<typeof addressFormValidationSchema>

  function handleSubmitOrder(data: AddressFormData) {
    getFormData(data)
    reset()
  }

  function handleSelectPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
    console.log(selectedPaymentMethod)
  }

  // Verify content to validate button click
  const cep = watch('cep')
  const address = watch('address')
  const number = watch('number')
  const neighborhood = watch('neighborhood')
  const city = watch('city')
  const state = watch('state')

  const isSubmitDisabled =
    !cep || !address || !number || !neighborhood || !city || !state

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
      <form onSubmit={handleSubmit(handleSubmitOrder)}>
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
              <input
                type="text"
                id="cep"
                placeholder="CEP"
                className="mediumInput"
                {...register('cep')}
              />
              <input
                type="text"
                placeholder="Rua"
                id="address"
                {...register('address')}
              />
              <div>
                <input
                  type="text"
                  placeholder="Número"
                  className="mediumInput"
                  id="number"
                  {...register('number')}
                />
                <div className="complementInput" optional-text="Opcional">
                  <input
                    type="text"
                    placeholder="Complemento"
                    id="complement"
                    {...register('complement')}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  className="mediumInput"
                  id="neighborhood"
                  {...register('neighborhood')}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  id="city"
                  {...register('city')}
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="smallInput"
                  id="state"
                  {...register('state')}
                />
              </div>
            </AddressForm>
          </AddressFormContainer>

          <PaymentForm>
            <PaymentFormHeader>
              <CurrencyDollarSimple size={22} />
              <div>
                <h1>Pagamento</h1>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentFormHeader>
            <PaymentMethodSelection>
              <PaymentMethod
                variant="credito"
                onClick={handleSelectPaymentMethod('Crédito')}
              />
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
            <NavLink to={'/success'}>
              <ConfirmOrderButton type="submit" disabled={isSubmitDisabled}>
                confirmar pedido
              </ConfirmOrderButton>
            </NavLink>
          </CartItemsContainer>
        </OrderCart>
      </form>
    </CheckoutContainer>
  )
}
