import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type MiniIconVariant = 'cart' | 'timer' | 'package' | 'coffee'

interface MiniIconProps {
  variant: MiniIconVariant
}

const miniIconVariants = {
  cart: defaultTheme['yellow-dark'],
  timer: defaultTheme['yellow-default'],
  package: defaultTheme['base-text'],
  coffee: defaultTheme['purple-dark'],
}

export const MiniIconContainer = styled.div<MiniIconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  ${(props) => {
    return css`
      background-color: ${miniIconVariants[props.variant]};
    `
  }}

  width: 32px;
  height: 32px;
  border-radius: 1000px;
  color: ${(props) => props.theme.white};
`
