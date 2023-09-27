import AmericanImgUrl from '../assets/images/type-american.svg'
import ArabicImgUrl from '../assets/images/type-arabic.svg'
import CapuccinoImgUrl from '../assets/images/type-capuccino.svg'
import CoffeeWithMilkImgUrl from '../assets/images/type-coffee-with-milk.svg'
import CreamyExpressoImgUrl from '../assets/images/type-creamy-expresso.svg'
import CubanImgUrl from '../assets/images/type-cuban.svg'
import ExpressoImgUrl from '../assets/images/type-expresso.svg'
import HawaiianImgUrl from '../assets/images/type-hawaiian.svg'
import HotChocolateImgUrl from '../assets/images/type-hot-chocolate.svg'
import IcedExpressoImgUrl from '../assets/images/type-iced-expresso.svg'
import IrishImgUrl from '../assets/images/type-irish.svg'
import LatteImgUrl from '../assets/images/type-latte.svg'
import MacchiatoImgUrl from '../assets/images/type-macchiato.svg'
import MochaccinoImgUrl from '../assets/images/type-mochaccino.svg'

type Tag = 'traditional' | 'ice' | 'with milk' | 'special' | 'alcoholic'

export interface Product {
  id: string
  name: string
  tags: Array<Tag>
  description: string
  price: number
  imgUrl: string
  imgAltText: string
}

export const products: Array<Product> = [
  {
    id: '53e723c2-78da-44c5-8fa5-74751ed8dcbc',
    name: 'Traditional Espresso',
    tags: ['traditional'],
    description: 'The traditional coffee made with hot water and ground beans',
    price: 7.9,
    imgUrl: ExpressoImgUrl,
    imgAltText:
      'Traditional Espresso in a cup with white saucer seen from above',
  },
  {
    id: 'a63e6839-1b53-491b-b950-2cf254442bed',
    name: 'American Espresso',
    tags: ['traditional'],
    description: 'Diluted espresso, less intense than the traditional one',
    price: 8.9,
    imgUrl: AmericanImgUrl,
    imgAltText: 'American Espresso in a cup with white saucer seen from above',
  },
  {
    id: 'd5f88de6-d886-4025-bfe1-339c92267b7c',
    name: 'Creamy Espresso',
    tags: ['traditional'],
    description: 'Traditional espresso coffee with creamy foam',
    price: 6.9,
    imgUrl: CreamyExpressoImgUrl,
    imgAltText: 'Creamy Espresso in a cup with white saucer seen from above',
  },
  {
    id: 'bfe6f04f-0a46-4464-bf2c-499ef8f962bb',
    name: 'Iced Espresso',
    tags: ['traditional', 'ice'],
    description: 'Beverage prepared with espresso and ice cubes',
    price: 7.9,
    imgUrl: IcedExpressoImgUrl,
    imgAltText: 'Iced Espresso in a cup with white saucer seen from above',
  },
  {
    id: 'a5b462ca-e666-401e-bba5-df412da045e2',
    name: 'Coffee with Milk',
    tags: ['traditional', 'with milk'],
    description: 'Half and half of traditional espresso with steamed milk',
    price: 9.9,
    imgUrl: CoffeeWithMilkImgUrl,
    imgAltText: 'Coffee with Milk in a cup with white saucer seen from above',
  },
  {
    id: '2c7a86e8-499d-4087-b0e4-6af160daa257',
    name: 'Latte',
    tags: ['traditional', 'with milk'],
    description:
      'A shot of espresso with double the amount of milk and creamy foam',
    price: 6.9,
    imgUrl: LatteImgUrl,
    imgAltText: 'Latte in a cup with white saucer seen from above',
  },
  {
    id: '9a616c3e-d6b6-4883-8c3f-03f2a4f47dd5',
    name: 'Cappuccino',
    tags: ['traditional', 'with milk'],
    description:
      'A cinnamon-infused drink made from equal parts of coffee, milk, and foam',
    price: 8.9,
    imgUrl: CapuccinoImgUrl,
    imgAltText: 'Cappuccino in a cup with white saucer seen from above',
  },
  {
    id: 'a5106340-bceb-4440-83d5-2e1c451a403d',
    name: 'Macchiato',
    tags: ['traditional', 'with milk'],
    description: 'Espresso coffee mixed with a bit of hot milk and foam',
    price: 9.9,
    imgUrl: MacchiatoImgUrl,
    imgAltText: 'Macchiato in a cup with white saucer seen from above',
  },
  {
    id: 'c9038346-8c70-43b4-a53a-74a2ac9597b2',
    name: 'Mocaccino',
    tags: ['traditional', 'with milk'],
    description: 'Espresso coffee with chocolate syrup, little milk, and foam',
    price: 7.9,
    imgUrl: MochaccinoImgUrl,
    imgAltText: 'Mocaccino in a cup with white saucer seen from above',
  },
  {
    id: '5bf6908b-0821-45f8-8ee0-7a6df2f53a4a',
    name: 'Hot Chocolate',
    tags: ['traditional', 'with milk'],
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: 8.9,
    imgUrl: HotChocolateImgUrl,
    imgAltText: 'Hot Chocolate in a cup with white saucer seen from above',
  },
  {
    id: '8bb15987-9045-4fda-b336-b03b0b0ee540',
    name: 'Cuban',
    tags: ['traditional', 'alcoholic', 'ice'],
    description: 'Iced espresso drink with rum, cream, and mint',
    price: 9.9,
    imgUrl: CubanImgUrl,
    imgAltText: 'Cuban coffee in a cup with white saucer seen from above',
  },
  {
    id: '4875e694-f2ff-414e-9ec9-4b9ec7750fec',
    name: 'Hawaiian',
    tags: ['special'],
    description: 'Sweetened drink prepared with coffee and coconut milk',
    price: 6.9,
    imgUrl: HawaiianImgUrl,
    imgAltText: 'Hawaiian coffee in a cup with white saucer seen from above',
  },
  {
    id: 'faa5da48-1c7f-4f4d-b6fd-9ead92ad8825',
    name: 'Arabic',
    tags: ['special'],
    description: 'Beverage prepared with Arab coffee beans and spices',
    price: 7.9,
    imgUrl: ArabicImgUrl,
    imgAltText: 'Arabic coffee in a cup with white saucer seen from above',
  },
  {
    id: '34fe500e-97d4-49d9-8ff7-0c2f94868964',
    name: 'Irish',
    tags: ['special', 'alcoholic'],
    description:
      'Coffee-based drink with Irish whiskey, sugar, and whipped cream',
    price: 8.9,
    imgUrl: IrishImgUrl,
    imgAltText: ' in a cup with white saucer seen from above',
  },
]
