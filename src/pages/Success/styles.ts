import styled from 'styled-components'

export const SuccessContainer = styled.div`
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 4px;
  }
  > span {
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  > div {
    display: flex;
    align-items: center;
    gap: 10.2rem;
  }
`
export const OrderConfirmation = styled.div`
  width: 526px;
  height: 270px;
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  padding: 4rem;
  margin-top: 4rem;

  background: linear-gradient(
        ${(props) => props.theme['background-default']},
        ${(props) => props.theme['background-default']}
      )
      padding-box,
    linear-gradient(
        270deg,
        ${(props) => props.theme['purple-default']},
        ${(props) => props.theme['yellow-default']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`
export const DeliveryInfo = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  > div {
    display: flex;
    flex-direction: column;

    .boldText {
      font-weight: 700;
    }
  }
`
