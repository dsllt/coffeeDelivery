import { Trash } from 'phosphor-react'
import { RemoveButtonContainer } from './styles'

interface RemoveButtonProps {
  removeItem: () => void
}

export function RemoveButton({ removeItem }: RemoveButtonProps) {
  return (
    <RemoveButtonContainer type="button" onClick={removeItem}>
      <Trash size={16} />
      <span>remover</span>
    </RemoveButtonContainer>
  )
}
