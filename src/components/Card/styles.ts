import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  padding: 11.2rem 2rem 2rem 2rem;
  border-radius: 0.6rem 3.6rem;
  position: relative;
  margin-top: 1rem;
`

export const CoffeePicture = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  box-sizing: unset;
  top: -20px;
`

export const CoffeeCategory = styled.div`
  margin-bottom: 1.6rem;
  > span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const CoffeeDescription = styled.div`
  margin-bottom: 3.3rem;
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
    margin-bottom: 0.8rem;
  }
  > span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    display: block;
    text-align: center;
  }
`

export const CoffeeCheckout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > span {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-right: 0.5rem;
  }
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
    margin-right: 2.3rem;
  }
`

export const NumberOfItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  width: 7.2rem;
  height: 3.8rem;
  padding: 8px;
  margin-right: 8px;
  border-radius: 6px;

`

export const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme['purple-default']};
  }
`
