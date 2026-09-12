const initialRecipes = [
  {
    id: 1,
    name: "Vegetable Soup",
    category: "Dinner",
    servings: 4,
    time: "30 minutes",
    description:
      "A comforting and nutritious soup packed with fresh garden vegetables and herbs.",
    image: "/images/vegetable-soup.jpg",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "2 carrots, diced",
      "2 stalks celery, diced",
      "4 cups vegetable broth",
      "1 cup green beans, chopped",
      "Salt and black pepper to taste",
    ],
    steps: [
      "Heat olive oil in a large pot over medium heat.",
      "Add chopped onion, carrots, and celery; cook until soft (about 5-7 minutes).",
      "Pour in the vegetable broth and bring to a boil.",
      "Add green beans, reduce heat, and simmer for 20 minutes until vegetables are tender.",
      "Season with salt and black pepper before serving hot.",
    ],
  },
  {
    id: 2,
    name: "Grilled Chicken Sandwich",
    category: "Lunch",
    servings: 2,
    time: "20 minutes",
    description:
      "A juicy grilled chicken breast served on whole-grain bread with crisp lettuce and tomatoes.",
    image: "/images/grilled-chicken-sandwich.jpg",
    ingredients: ["2 chicken breasts", "2 burger buns", "1 tomato (sliced)"],
    steps: [
      "Season and grill the chicken.",
      "Toast the buns.",
      "Assemble the sandwich.",
    ],
  },
  {
    id: 3,
    name: "Doro Wat",
    category: "Dinner",
    servings: 6,
    time: "90 minutes",
    description:
      "A classic Ethiopian chicken stew slow-cooked with berbere spice, onions, and hard-boiled eggs.",
    image: "/images/doro-wat.jpg",
    ingredients: [
      "1 whole chicken",
      "3 onions (chopped)",
      "4 tbsp berbere spice",
    ],
    steps: [
      "Cook onions until soft.",
      "Add berbere and chicken.",
      "Simmer until tender.",
    ],
  },
];

export { initialRecipes };
