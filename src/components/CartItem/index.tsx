import { RemoveButton } from '../RemoveButton'
import { SelectItems } from '../SelectItems'
import { CartItemContainer, ItemDescription, ItemInfo, ItemSelection } from './styles'

import cafeEspresso from '../../assets/Expresso.png'

export function CartItem() {
  return (
    <CartItemContainer>
      <img src={cafeEspresso}/>
      <ItemDescription>
        <ItemInfo>
          <span className='itemName'>Expresso Tradicional</span>
          <span className='itemPrice'>R$ 9,90</span>
        </ItemInfo>
        <ItemSelection>
          <SelectItems />
          <RemoveButton />
        </ItemSelection>
      </ItemDescription>
    </CartItemContainer>
  )
}
