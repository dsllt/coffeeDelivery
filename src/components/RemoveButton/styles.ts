import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
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
    color: ${(props) => props.theme['purple-dark']};
    > span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
