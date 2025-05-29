export type Product = {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    details: { title: string; value: string }[];
  };
  
  export const products: Product[] = [
    // Соленые завтраки
    {
      id: "engBreak",
      title: "Английский завтрак",
      image: "Завтрак.jfif",
      price: 610,
      category: "Соленые завтраки",
      description: "Классический английский завтрак с яичницей, беконом, сосисками, грибами, помидорами и фасолью в томатном соусе. Подается с тостами и джемом.",
      details: [
        { title: "Калорийность", value: "850 ккал" },
        { title: "Вес", value: "450 г" },
        { title: "Цена", value: "610₽" }
      ]
    },
    {
      id: "waffles",
      title: "Вафли с лососем",
      image: "Вафли.jfif",
      price: 440,
      category: "Соленые завтраки",
      description: "Домашние вафли с сёмгой, крем-чизом, свежим огурцом и зеленью.",
      details: [
        { title: "Калорийность", value: "520 ккал" },
        { title: "Вес", value: "230 г" },
        { title: "Цена", value: "440₽" }
      ]
    },
    {
      id: "croqueMad",
      title: "Крок-Мадам",
      image: "Крок-мадам.jfif",
      price: 540,
      category: "Соленые завтраки",
      description: "Французский горячий сэндвич с ветчиной, сыром, яйцом и соусом бешамель.",
      details: [
        { title: "Калорийность", value: "670 ккал" },
        { title: "Вес", value: "320 г" },
        { title: "Цена", value: "540₽" }
      ]
    },
  
    // Сладкие завтраки
    {
      id: "porridge",
      title: "Рисовая каша с сезонными ягодами",
      image: "Каша.jfif",
      price: 410,
      category: "Сладкие завтраки",
      description: "Нежная рисовая каша на молоке с сезонными ягодами и медом.",
      details: [
        { title: "Калорийность", value: "340 ккал" },
        { title: "Вес", value: "250 г" },
        { title: "Цена", value: "410₽" }
      ]
    },
    {
      id: "pancakes",
      title: "Блины с медом и ягодами",
      image: "Блины.jfif",
      price: 390,
      category: "Сладкие завтраки",
      description: "Тонкие блины с медом, свежими ягодами и сахарной пудрой.",
      details: [
        { title: "Калорийность", value: "410 ккал" },
        { title: "Вес", value: "200 г" },
        { title: "Цена", value: "390₽" }
      ]
    },
    {
      id: "smoothie",
      title: "Смузи-боул c гранолой и фруктами",
      image: "Смузи-боул.jfif",
      price: 590,
      category: "Сладкие завтраки",
      description: "Яркий смузи-боул на основе фруктов с гранолой и семенами чиа.",
      details: [
        { title: "Калорийность", value: "370 ккал" },
        { title: "Вес", value: "300 г" },
        { title: "Цена", value: "590₽" }
      ]
    },
  
    // Десерты
    {
      id: "cinnabon",
      title: "Синнабон Красный бархат",
      image: "Синнабон.jfif",
      price: 360,
      category: "Десерты",
      description: "Пышная булочка с корицей и сливочным кремом в стиле Красный бархат.",
      details: [
        { title: "Калорийность", value: "440 ккал" },
        { title: "Вес", value: "120 г" },
        { title: "Цена", value: "360₽" }
      ]
    },
    {
      id: "croissant",
      title: "Круассан с кремом и клубникой",
      image: "Круассан.jfif",
      price: 330,
      category: "Десерты",
      description: "Воздушный круассан с заварным кремом и свежей клубникой.",
      details: [
        { title: "Калорийность", value: "390 ккал" },
        { title: "Вес", value: "110 г" },
        { title: "Цена", value: "330₽" }
      ]
    },
    {
      id: "cheesecake",
      title: "Шоколадный чизкейк",
      image: "Чизкейк.jfif",
      price: 290,
      category: "Десерты",
      description: "Классический чизкейк с шоколадным ганашем.",
      details: [
        { title: "Калорийность", value: "350 ккал" },
        { title: "Вес", value: "130 г" },
        { title: "Цена", value: "290₽" }
      ]
    },
  
    // Напитки
    {
      id: "espresso",
      title: "Эспрессо",
      image: "Эспрессо.jfif",
      price: 100,
      category: "Напитки",
      description: "Крепкий и насыщенный кофе, приготовленный по классической итальянской технологии.",
      details: [
        { title: "Калорийность", value: "5 ккал" },
        { title: "Объем", value: "40 мл" },
        { title: "Цена", value: "100₽" }
      ]
    },
    {
      id: "americano",
      title: "Американо",
      image: "Американо.jfif",
      price: 180,
      category: "Напитки",
      description: "Классический американо на основе эспрессо с добавлением горячей воды.",
      details: [
        { title: "Калорийность", value: "10 ккал" },
        { title: "Объем", value: "180 мл" },
        { title: "Цена", value: "180₽" }
      ]
    },
    {
      id: "flatWhite",
      title: "Флэт уайт",
      image: "Флэт_уайт.jfif",
      price: 250,
      category: "Напитки",
      description: "Кофейный напиток на основе эспрессо с молоком и микропеной.",
      details: [
        { title: "Калорийность", value: "110 ккал" },
        { title: "Объем", value: "200 мл" },
        { title: "Цена", value: "250₽" }
      ]
    },
    {
      id: "cappuccino",
      title: "Капучино",
      image: "Капучино.jfif",
      price: 260,
      category: "Напитки",
      description: "Популярный кофейный напиток с молочной пеной.",
      details: [
        { title: "Калорийность", value: "120 ккал" },
        { title: "Объем", value: "250 мл" },
        { title: "Цена", value: "260₽" }
      ]
    },
    {
      id: "latte",
      title: "Латте",
      image: "Латте.jfif",
      price: 260,
      category: "Напитки",
      description: "Нежный сливочный кофе на основе эспрессо с молочной пеной. Идеальный баланс кофе и молока.",
      details: [
        { title: "Калорийность", value: "120 ккал" },
        { title: "Объем", value: "300 мл" },
        { title: "Цена", value: "260₽" }
      ]
    },
    {
      id: "cacao",
      title: "Какао",
      image: "Какао.jfif",
      price: 290,
      category: "Напитки",
      description: "Горячий шоколадный напиток с молочной пеной.",
      details: [
        { title: "Калорийность", value: "160 ккал" },
        { title: "Объем", value: "250 мл" },
        { title: "Цена", value: "290₽" }
      ]
    },
    {
      id: "spritz",
      title: "Апельсиновый кофе-сприц",
      image: "Сприц.jfif",
      price: 340,
      category: "Напитки",
      description: "Освежающий напиток на основе эспрессо, апельсинового сока и содовой.",
      details: [
        { title: "Калорийность", value: "80 ккал" },
        { title: "Объем", value: "300 мл" },
        { title: "Цена", value: "340₽" }
      ]
    },
    {
      id: "peachTea",
      title: "Персиковый чай",
      image: "Персиковый_чай.jfif",
      price: 310,
      category: "Напитки",
      description: "Ароматный черный чай с натуральным персиковым сиропом и кусочками персика.",
      details: [
        { title: "Калорийность", value: "60 ккал" },
        { title: "Объем", value: "400 мл" },
        { title: "Цена", value: "310₽" }
      ]
    },
  
    // Special Меню
    {
      id: "lavandCoffee",
      title: "Лавандовый кофе с медом и пенкой из овса",
      image: "Лавандовый_кофе.jfif",
      price: 440,
      category: "Special",
      description: "Ароматный кофе с лавандой, медом и нежной овсяной пенкой.",
      details: [
        { title: "Калорийность", value: "130 ккал" },
        { title: "Объем", value: "250 мл" },
        { title: "Цена", value: "440₽" }
      ]
    },
    {
      id: "cherryLatte",
      title: "Вишнево-ванильный латте",
      image: "Вишневый_латте.jfif",
      price: 440,
      category: "Special",
      description: "Латте с натуральным вишнёвым и ванильным сиропом.",
      details: [
        { title: "Калорийность", value: "140 ккал" },
        { title: "Объем", value: "300 мл" },
        { title: "Цена", value: "440₽" }
      ]
    },
    {
      id: "frappuccino",
      title: "Клубничный фраппучино",
      image: "Фраппучино.jfif",
      price: 480,
      category: "Special",
      description: "Освежающий фраппучино с клубничным сиропом и сливками.",
      details: [
        { title: "Калорийность", value: "210 ккал" },
        { title: "Объем", value: "350 мл" },
        { title: "Цена", value: "480₽" }
      ]
    },
    {
      id: "cherryTea",
      title: "Вишневый чай с бергамотом",
      image: "Вишневый_чай.jfif",
      price: 400,
      category: "Special",
      description: "Чёрный чай с вишнёвым сиропом и ароматом бергамота.",
      details: [
        { title: "Калорийность", value: "65 ккал" },
        { title: "Объем", value: "400 мл" },
        { title: "Цена", value: "400₽" }
      ]
    }
  ];
  