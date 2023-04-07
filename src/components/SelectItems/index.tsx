import { SelectItemsButton, SelectItemsContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function SelectItems() {
  return (
    <SelectItemsContainer>
      <SelectItemsButton type="button">
        <Minus size={14} weight="bold" />
      </SelectItemsButton>
      <input type="number" value={0} />
      <SelectItemsButton type="button">
        <Plus size={14} weight="bold" />
      </SelectItemsButton>
    </SelectItemsContainer>
  )
}
