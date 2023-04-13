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
  const { setNumberOfTotalItems, numberOfTotalItems, cartItems, setCartItems } =
    useContext(CartContext)
  const [numberOfItems, setNumberOfItems] = useState(coffeeItem.numberOfItems)
  function addItem() {
    setNumberOfItems(numberOfItems + 1)
    setNumberOfTotalItems(numberOfTotalItems + 1)
  }
  function deleteItem() {
    if (numberOfItems > 0) {
      setNumberOfItems(numberOfItems - 1)
      setNumberOfTotalItems(numberOfTotalItems - 1)
    } else {
      return 0
    }
  }
  function verifyCartItems(cartItems: Cart[]) {
    if (cartItems.length > 0) {
      console.log(numberOfItems)
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
                addItem={addItem}
                deleteItem={deleteItem}
                numberOfItems={numberOfItems}
              />
              <RemoveButton />
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
