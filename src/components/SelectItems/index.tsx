import { SelectItemsButton, SelectItemsContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface ItemsProps {
  addItem: () => void
  deleteItem: () => void
  numberOfItems: number
}

export function SelectItems({
  addItem,
  deleteItem,
  numberOfItems,
}: ItemsProps) {
  function handleAddItem() {
    addItem()
  }
  function handleDeleteItem() {
    deleteItem()
  }
  return (
    <SelectItemsContainer>
      <SelectItemsButton type="button">
        <Minus size={14} weight="bold" onClick={handleDeleteItem} />
      </SelectItemsButton>
      <input type="number" value={numberOfItems} />
      <SelectItemsButton type="button" onClick={handleAddItem}>
        <Plus size={14} weight="bold" />
      </SelectItemsButton>
    </SelectItemsContainer>
  )
}
