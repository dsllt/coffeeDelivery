import { RemoveButton } from '../RemoveButton'
import { SelectItems } from '../SelectItems'
import {
  CartItemContainer,
  ItemDescription,
  ItemInfo,
  ItemSelection,
} from './styles'

import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Cart } from '../../reducers/cartItems/reducer'

interface CoffeeItemProps {
  coffeeItem: {
    name: string
    price: string
    image: string
    numberOfItems: number
  }
}

export function CartItem({ coffeeItem }: CoffeeItemProps) {
  const { cartItems, addItem, deleteItem, removeItem } = useContext(CartContext)

  function handleAddItem() {
    addItem(coffeeItem.name)
  }

  function handleDeleteItem() {
    deleteItem(coffeeItem.name)
  }

  function handleRemoveItem() {
    removeItem(coffeeItem.name)
  }

  function verifyCartItems(cartItems: Cart[]) {
    if (cartItems.length > 0) {
      return (
        <CartItemContainer>
          <img src={coffeeItem.image} alt="" />
          <ItemDescription>
            <ItemInfo>
              <span className="itemName">{coffeeItem.name}</span>
              <span className="itemPrice">{coffeeItem.price}</span>
            </ItemInfo>
            <ItemSelection>
              <SelectItems
                addItem={handleAddItem}
                deleteItem={handleDeleteItem}
                numberOfItems={coffeeItem.numberOfItems}
              />
              <RemoveButton removeItem={handleRemoveItem} />
            </ItemSelection>
          </ItemDescription>
        </CartItemContainer>
      )
    } else {
      return <></>
    }
  }
  return verifyCartItems(cartItems)
}
