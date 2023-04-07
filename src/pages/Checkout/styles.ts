import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  margin-top: 4rem;
  margin-bottom: 24rem;
`

export const BaseSideDiv = styled.div`
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderForm = styled(BaseSideDiv)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const BaseFormDiv = styled.div`
  padding: 4rem;
  background: ${(props) => props.theme['base-card']};
  width: 64rem;
`

export const FormHeader = styled.div`
  display: flex;
  gap: 8px;
  > div h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  > div span {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressFormContainer = styled(BaseFormDiv)``

export const AddressFormHeader = styled(FormHeader)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;

  > input,
  div input {
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
    padding: 1.2rem;
    border-radius: 4px;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: nowrap;
  }
  .mediumInput {
    width: 20rem;
  }
  .smallInput {
    width: 6rem;
  }
  .complementInput {
    width: 100%;
  }
  .complementInput::after {
    content: attr(optional-text);
    position: absolute;
    font-size: 1.2rem;
    font-style: italic;
    transform: translateY(120%) translateX(-140%);
    color: ${(props) => props.theme['base-label']};
  }
`

export const PaymentFormHeader = styled(FormHeader)`
  color: ${(props) => props.theme['purple-dark']};
`

export const PaymentForm = styled(BaseFormDiv)``

export const PaymentMethodSelection = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.2rem;
`

export const OrderCart = styled(BaseSideDiv)``

export const CartItemsContainer = styled(BaseFormDiv)`
  width: 44.8rem;
  border-radius: 6px 44px;
  margin-top: 1.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  font-size: 1.4rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  > span:last-child {
    font-size: 1.6rem;
    line-height: 130%;
  }
`
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const ConfirmOrderButton = styled.button`
  width: 100%;
  margin-top: 2.4rem;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: ${(props) => props.theme['yellow-default']};
  cursor: pointer;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
