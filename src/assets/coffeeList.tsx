interface CoffeeListProps {
  name: string
  type: string[]
  description: string
  price: string
  image: string
  numberOfItems: number
}

export const coffeeList: CoffeeListProps[] = [
  {
    name: 'Expresso Tradicional',
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    image: 'src/assets/Expresso.png',
    numberOfItems: 0,
  },
  {
    name: 'Expresso Americano',
    type: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    image: 'src/assets/Americano.png',
    numberOfItems: 0,
  },
  {
    name: 'Expresso Cremoso',
    type: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    image: 'src/assets/ExpressoCremoso.png',
    numberOfItems: 0,
  },
  {
    name: 'Expresso Gelado',
    type: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    image: 'src/assets/CafeGelado.png',
    numberOfItems: 0,
  },
  {
    name: 'Café com Leite',
    type: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    image: 'src/assets/CafeComLeite.png',
    numberOfItems: 0,
  },
  {
    name: 'Latte',
    type: ['tradicional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    image: 'src/assets/Latte.png',
    numberOfItems: 0,
  },
  {
    name: 'Capuccino',
    type: ['tradicional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    image: 'src/assets/Capuccino.png',
    numberOfItems: 0,
  },
  {
    name: 'Macchiato',
    type: ['tradicional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    image: 'src/assets/Macchiato.png',
    numberOfItems: 0,
  },
  {
    name: 'Mocaccino',
    type: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    image: 'src/assets/Mochaccino.png',
    numberOfItems: 0,
  },
  {
    name: 'Chocolate Quente',
    type: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    image: 'src/assets/ChocolateQuente.png',
    numberOfItems: 0,
  },
  {
    name: 'Cubano',
    type: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    image: 'src/assets/Cubano.png',
    numberOfItems: 0,
  },
  {
    name: 'Havaiano',
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    image: 'src/assets/Havaiano.png',
    numberOfItems: 0,
  },
  {
    name: 'Árabe',
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    image: 'src/assets/Árabe.png',
    numberOfItems: 0,
  },
  {
    name: 'Irlandês',
    type: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    image: 'src/assets/Irlandês.png',
    numberOfItems: 0,
  },
]
