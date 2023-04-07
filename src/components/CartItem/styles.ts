import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: solid 1px ${(props) => props.theme['base-button']};
  padding-bottom: 3.2rem;
  margin-bottom: 2.4rem;
`
export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  .itemName {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  .itemPrice {
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ItemSelection = styled.div`
  display: flex;
  gap: 8px;
`
