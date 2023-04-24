import styled from 'styled-components'

export type PaymentMethodVariant = 'credito' | 'debito' | 'dinheiro'
export interface PaymentMethodProps {
  variant: PaymentMethodVariant
  onClick?: () => void
}

export const PaymentMethodContainer = styled.button<PaymentMethodProps>`
  background: ${(props) => props.theme['base-button']};
  border: solid 1px ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.2rem;
  padding: 1.6rem;

  color: ${(props) => props.theme['purple-default']};
  cursor: pointer;

  > span {
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    > span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  :focus {
    background: ${(props) => props.theme['purple-light']};
    border: solid 1px ${(props) => props.theme['purple-default']};
    outline: 0;
    box-shadow: 0 0 0;
  }
`
