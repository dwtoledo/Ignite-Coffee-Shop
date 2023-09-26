type Tag = 'traditional' | 'ice' | 'with milk' | 'special' | 'alcoholic'

interface Product {
  id: string
  name: string
  tags: Array<Tag>
  description: string
  price: number
}

export const products: Array<Product> = [
  {
    id: '53e723c2-78da-44c5-8fa5-74751ed8dcbc',
    name: 'Traditional Espresso',
    tags: ['traditional'],
    description: 'The traditional coffee made with hot water and ground beans',
    price: 7.24,
  },
  {
    id: 'a63e6839-1b53-491b-b950-2cf254442bed',
    name: 'American Espresso',
    tags: ['traditional'],
    description: 'Diluted espresso, less intense than the traditional one',
    price: 8.15,
  },
  {
    id: 'd5f88de6-d886-4025-bfe1-339c92267b7c',
    name: 'Creamy Espresso',
    tags: ['traditional'],
    description: 'Traditional espresso coffee with creamy foam',
    price: 6.89,
  },
  {
    id: 'bfe6f04f-0a46-4464-bf2c-499ef8f962bb',
    name: 'Iced Espresso',
    tags: ['traditional', 'ice'],
    description: 'Beverage prepared with espresso and ice cubes',
    price: 7.93,
  },
  {
    id: 'a5b462ca-e666-401e-bba5-df412da045e2',
    name: 'Coffee with Milk',
    tags: ['traditional', 'with milk'],
    description: 'Half and half of traditional espresso with steamed milk',
    price: 9.47,
  },
  {
    id: '2c7a86e8-499d-4087-b0e4-6af160daa257',
    name: 'Latte',
    tags: ['traditional', 'with milk'],
    description:
      'A shot of espresso with double the amount of milk and creamy foam',
    price: 6.72,
  },
  {
    id: '9a616c3e-d6b6-4883-8c3f-03f2a4f47dd5',
    name: 'Cappuccino',
    tags: ['traditional', 'with milk'],
    description:
      'A cinnamon-infused drink made from equal parts of coffee, milk, and foam',
    price: 8.61,
  },
  {
    id: 'a5106340-bceb-4440-83d5-2e1c451a403d',
    name: 'Macchiato',
    tags: ['traditional', 'with milk'],
    description: 'Espresso coffee mixed with a bit of hot milk and foam',
    price: 9.12,
  },
  {
    id: 'c9038346-8c70-43b4-a53a-74a2ac9597b2',
    name: 'Mocaccino',
    tags: ['traditional', 'with milk'],
    description: 'Espresso coffee with chocolate syrup, little milk, and foam',
    price: 7.76,
  },
  {
    id: '5bf6908b-0821-45f8-8ee0-7a6df2f53a4a',
    name: 'Hot Chocolate',
    tags: ['traditional', 'with milk'],
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: 8.34,
  },
  {
    id: '8bb15987-9045-4fda-b336-b03b0b0ee540',
    name: 'Cuban',
    tags: ['traditional', 'alcoholic', 'ice'],
    description: 'Iced espresso drink with rum, cream, and mint',
    price: 9.89,
  },
  {
    id: '4875e694-f2ff-414e-9ec9-4b9ec7750fec',
    name: 'Hawaiian',
    tags: ['special'],
    description: 'Sweetened drink prepared with coffee and coconut milk',
    price: 6.57,
  },
  {
    id: 'faa5da48-1c7f-4f4d-b6fd-9ead92ad8825',
    name: 'Arabic',
    tags: ['special'],
    description: 'Beverage prepared with Arab coffee beans and spices',
    price: 7.88,
  },
  {
    id: '34fe500e-97d4-49d9-8ff7-0c2f94868964',
    name: 'Irish',
    tags: ['special', 'alcoholic'],
    description:
      'Coffee-based drink with Irish whiskey, sugar, and whipped cream',
    price: 8.73,
  },
]
