import {
  CoffeeMenu,
  HomeContainer,
  HomeHeader,
  ColumnOfItems,
  TextInHeader,
  CoffeeList,
} from './styles'
import HomeImg from '../../assets/HomeImage.png'
import { MiniIcon } from '../../components/MiniIcon'
import { Card } from '../../components/Card'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { coffeeItems } = useContext(CartContext)
  return (
    <HomeContainer>
      <HomeHeader>
        <TextInHeader>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <div>
            <ColumnOfItems>
              <div>
                <MiniIcon variant="cart" /> Compra simples e segura
              </div>
              <div>
                <MiniIcon variant="timer" />
                Entrega rápida e rastreada
              </div>
            </ColumnOfItems>
            <ColumnOfItems>
              <div>
                <MiniIcon variant="package" />
                Embalagem mantém o café intacto
              </div>
              <div>
                <MiniIcon variant="coffee" />O café chega fresquinho até você
              </div>
            </ColumnOfItems>
          </div>
        </TextInHeader>
        <img src={HomeImg} alt="" />
      </HomeHeader>
      <CoffeeMenu>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          {coffeeItems.map((item, index: number) => (
            <Card coffeeItem={item} key={index} />
          ))}
        </CoffeeList>
      </CoffeeMenu>
    </HomeContainer>
  )
}
