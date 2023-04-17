import { RemoveButton } from '../RemoveButton'
import { SelectItems } from '../SelectItems'
import {
  CartItemContainer,
  ItemDescription,
  ItemInfo,
  ItemSelection,
} from './styles'

import { useContext, useState } from 'react'
import { Cart, CartContext } from '../../contexts/CartContext'

interface CoffeeItemProps {
  coffeeItem: {
    name: string
    price: number
    image: string
    numberOfItems: number
  }
}

export function CartItem({ coffeeItem }: CoffeeItemProps) {
  const { cartItems, coffeeItems, addItem, deleteItem, removeItem } =
    useContext(CartContext)
  const [numberOfItems, setNumberOfItems] = useState(coffeeItem.numberOfItems)

  function handleAddItem() {
    addItem(coffeeItem.name)
    setNumberOfItems(numberOfItems + 1)
    console.log(coffeeItems)
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
                numberOfItems={numberOfItems}
              />
              <RemoveButton removeItem={handleRemoveItem} />
            </ItemSelection>
          </ItemDescription>
        </CartItemContainer>
      )
    } else {
      ;<></>
    }
  }
  return verifyCartItems(cartItems)
}
