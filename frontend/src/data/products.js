export const products = [
  {
    id: 1,
    name: "Burger Deluxe",
    price: 5.99,
    image: new URL('../assets/burger.jpg', import.meta.url).href,
    description: "Juicy grilled burger with cheese and veggies"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 7.49,
    image: new URL('../assets/pizza.jpg', import.meta.url).href,
    description: "Classic Italian pizza with tomatoes and basil"
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 4.50,
    image: new URL('../assets/Salad.jpeg', import.meta.url).href,
    description: "Fresh romaine lettuce with Caesar dressing"
  },
];
