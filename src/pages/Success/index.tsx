import { DeliveryInfo, OrderConfirmation, SuccessContainer } from './styles'
import successIllustration from '../../assets/SuccessIllustration.png'
import { MiniIcon } from '../../components/MiniIcon'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { addressForm, selectedPaymentMethod } = useContext(CartContext)
  console.log(selectedPaymentMethod)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <OrderConfirmation>
          <DeliveryInfo>
            <MiniIcon variant="location" />
            <div>
              <span>
                Entrega em{' '}
                <span className="boldText">
                  {addressForm.address + ', ' + addressForm.number}
                </span>
              </span>
              <span>
                {addressForm.neighborhood +
                  ' - ' +
                  addressForm.city +
                  ', ' +
                  addressForm.state}
              </span>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <MiniIcon variant="timer" />
            <div>
              <span>Previsão de entrega</span>
              <span className="boldText">20 min - 30 min </span>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <MiniIcon variant="money" />
            <div>
              <span>Pagamento na entrega</span>
              <span className="boldText">{selectedPaymentMethod}</span>
            </div>
          </DeliveryInfo>
        </OrderConfirmation>
        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
