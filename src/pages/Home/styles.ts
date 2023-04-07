import styled from 'styled-components'

export const HomeContainer = styled.div``
export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14rem;

  > img {
    width: 476px;
    height: 360px;
  }
`
export const TextInHeader = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 4.8rem;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1.6rem;
  }

  > span {
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 6.6rem;
  }

  > div {
    display: flex;
    gap: 4rem;
  }
`
export const ColumnOfItems = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`
export const CoffeeMenu = styled.div`
  margin-bottom: 10rem;
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 5.4rem;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`
