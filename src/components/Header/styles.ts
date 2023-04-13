import { NavLink } from 'react-router-dom'
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
export const CartButton = styled(NavLink)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  position: relative;

  > div {
    position: absolute;
    right: -8px;
    top: -8.65px;
    width: 2rem;
    height: 2rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;

    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;
  }
`
