export const categories = [
  {
    id: 'indoor',
    name: 'Indoor Plants',
    icon: '🌿',
    description: 'Statement greens that thrive in living rooms, bedrooms and offices.',
    plants: [
      { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', price: 49.99, image: '/plants/monstera-deliciosa.svg' },
      { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', price: 64.99, image: '/plants/fiddle-leaf-fig.svg' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 42.5, image: '/plants/rubber-plant.svg' },
      { id: 'snake-plant', name: 'Snake Plant', price: 34.99, image: '/plants/snake-plant.svg' },
      { id: 'peace-lily', name: 'Peace Lily', price: 29.99, image: '/plants/peace-lily.svg' },
      { id: 'golden-pothos', name: 'Golden Pothos', price: 24.99, image: '/plants/golden-pothos.svg' },
    ],
  },
  {
    id: 'air-purifying',
    name: 'Air Purifying Plants',
    icon: '💨',
    description: 'Hard-working leaves that help keep your indoor air fresh and clean.',
    plants: [
      { id: 'spider-plant', name: 'Spider Plant', price: 22.99, image: '/plants/spider-plant.svg' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 19.99, image: '/plants/aloe-vera.svg' },
      { id: 'boston-fern', name: 'Boston Fern', price: 27.5, image: '/plants/boston-fern.svg' },
      { id: 'dracaena-marginata', name: 'Dracaena Marginata', price: 45.0, image: '/plants/dracaena-marginata.svg' },
      { id: 'zebra-haworthia', name: 'Zebra Haworthia', price: 21.99, image: '/plants/zebra-haworthia.svg' },
      { id: 'areca-palm', name: 'Areca Palm', price: 54.99, image: '/plants/areca-palm.svg' },
    ],
  },
  {
    id: 'low-light',
    name: 'Low Light Plants',
    icon: '🌑',
    description: 'Tough, forgiving picks for north-facing rooms and shady corners.',
    plants: [
      { id: 'cast-iron-plant', name: 'Cast Iron Plant', price: 36.99, image: '/plants/cast-iron-plant.svg' },
      { id: 'chinese-evergreen', name: 'Chinese Evergreen', price: 32.5, image: '/plants/chinese-evergreen.svg' },
      { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', price: 26.99, image: '/plants/heartleaf-philodendron.svg' },
      { id: 'birds-nest-fern', name: "Bird's Nest Fern", price: 38.0, image: '/plants/birds-nest-fern.svg' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 31.99, image: '/plants/parlor-palm.svg' },
      { id: 'lady-palm', name: 'Lady Palm', price: 44.5, image: '/plants/lady-palm.svg' },
    ],
  },
  {
    id: 'pet-friendly',
    name: 'Pet Friendly Plants',
    icon: '🐾',
    description: 'Safe, non-toxic greenery for homes with curious cats and dogs.',
    plants: [
      { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', price: 47.99, image: '/plants/calathea-orbifolia.svg' },
      { id: 'peperomia-obtusifolia', name: 'Peperomia Obtusifolia', price: 25.99, image: '/plants/peperomia-obtusifolia.svg' },
      { id: 'african-violet', name: 'African Violet', price: 18.99, image: '/plants/african-violet.svg' },
      { id: 'money-tree', name: 'Money Tree', price: 52.5, image: '/plants/money-tree.svg' },
      { id: 'bromeliad', name: 'Bromeliad', price: 33.99, image: '/plants/bromeliad.svg' },
      { id: 'friendship-plant', name: 'Friendship Plant', price: 23.99, image: '/plants/friendship-plant.svg' },
    ],
  },
]

export const allPlants = categories.flatMap((category) => category.plants)
