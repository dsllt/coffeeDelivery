import styled from 'styled-components'

export const SelectItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  width: 7.2rem;
  height: 3.8rem;
  padding: 8px;
  margin-right: 8px;
  border-radius: 6px;

  > input {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  > input:focus {
    outline: 0;
    box-shadow: none;
  }

  > input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const SelectItemsButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: ${(props) => props.theme['purple-default']};

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }
`
