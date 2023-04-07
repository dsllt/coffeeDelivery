import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  padding: 0.8rem;
  border-radius: 6px;
  gap: 4px;

  font-size: 1.4rem;
  color: ${(props) => props.theme['purple-dark']};
`
export const CartButton = styled.button`
  border: none;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 8px;
  border-radius: 6px;
`
