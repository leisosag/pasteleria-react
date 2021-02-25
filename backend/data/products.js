const products = [
  {
    name: 'Frambuesa y chocolate',
    category: 'tortas',
    description:
      '4 capas de bizcochuelo marmolado de frambuesa relleno y decorado con buttercream de chocolate blanco y mermelada de frambuesa. Decorado con un goteo de chocolate blanco y merenguitos.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina levadante, azúcar impalpable, escencia de vainilla, leche entera, chocolate blanco y frambuesas.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/raspberry1.jpg',
    image2: '/images/cakes/raspberry2.jpg',
    image3: '/images/cakes/raspberry3.jpg',
    image4: '/images/cakes/raspberry4.jpg',
  },
  {
    name: 'lluvia de limón',
    category: 'tortas',
    description:
      'Suave Bizcochuelo de limón relleno con buttercream de limón y curd de limón. Decorado con buttercream de limón, merenguitos triturados, lluvia de curd de limón y crumble.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina levadante, azúcar impalpable, escencia de vainilla, leche entera y limones.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/lemon1.jpg',
    image2: '/images/cakes/lemon2.jpg',
    image3: '/images/cakes/lemon3.jpg',
    image4: '/images/cakes/lemon4.jpg',
  },
  {
    name: 'Smores',
    category: 'tortas',
    description:
      '4 capas de bizcochuelo de chocolate intenso relleno con buttercream de caramelo salado y galletitas. Decorado con buttercream de vainilla y chocolate, doble ganache y galletitas y cubierto con merengue italiano y más galletitas.',
    price: 2500,
    ingredients:
      'Cacao amargo, harina 000, manteca, azúcar, huevos, buttermilk, azúcar impalpable, aceite de girasol, crema, escencia de vainilla, chocolate semi amargo, café, bicarbonato de sodio, sal, galletitas.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/smores1.jpg',
    image2: '/images/cakes/smores2.jpg',
    image3: '/images/cakes/smores3.jpg',
    image4: '/images/cakes/smores4.jpg',
  },
  {
    name: 'Frambuesa marmolada',
    category: 'tortas',
    description:
      '8 capas de bizcochulo marmolado de frambuesa y vainilla con un relleno de frambuesas fresca y buttercream. Decorado con buttercream de vainilla y frambuesa.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, escencia de vainilla, frambuesas.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/ripple1.jpg',
    image2: '/images/cakes/ripple2.jpg',
    image3: '/images/cakes/ripple3.jpg',
    image4: '/images/cakes/ripple4.jpg',
  },
  {
    name: 'Ferrero Rocher',
    category: 'tortas',
    description:
      '8 capas de bizcochuelo de chocolate y avellanas, rellenas de buttercream de chocolate, capas de Nutella y avellanas. Decorado con ganache de chocolate, merenguitos y más avellanas.',
    price: 2500,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, harina 000, buttermilk, aceite de girasol, avellanas, crema, azúcar impalpable, chocolate semia amargo, nutella, café, leche entera, bicarbonato de sodio.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/ferrero1.jpg',
    image2: '/images/cakes/ferrero2.jpg',
    image3: '/images/cakes/ferrero3.jpg',
    image4: '/images/cakes/ferrero4.jpg',
  },
  {
    name: 'Golosinas',
    category: 'tortas',
    description:
      '4 capas de bizcochuelo marmolado en colores pastel, relleno y cubierto con buttercream de vainilla. Decorado con golosinas.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, golosinas (contienen gelatina), chocolate blanco, escencia de vainilla, colorante comestible.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/mix1.jpg',
    image2: '/images/cakes/mix2.jpg',
    image3: '/images/cakes/mix3.jpg',
    image4: '/images/cakes/mix4.jpg',
  },
  {
    name: 'Arcoiris',
    category: 'tortas',
    description:
      'La clave para la torta arcoíris perfecta está en los colores y las capas: trabajamos duro para hacer el nuestro con 6 capas de bizcocho de vainilla de colores brillantes en proporciones perfectas, buttercream de vainilla clásica y una decoración de arcoíris espolvoreada sprinkles.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, azúcar implapable, escencia de vainilla, leche entera, sprinkles, colorante comestible.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/rainbow1.jpg',
    image2: '/images/cakes/rainbow2.jpg',
    image3: '/images/cakes/rainbow3.jpg',
    image4: '/images/cakes/rainbow4.jpg',
  },
  {
    name: 'Unicornio',
    category: 'tortas',
    description:
      'Nuestra increíble torta unicornio cuenta con un biscochuelo de vainilla con sprinkles, buttercream de vainilla y relleno de mermelada. Cubierta buttercream en degradé con los colores del arco iris en tonos pastel y decorado con chocolate blanco y merenguitos.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, escencia de vainilla, leche entera, chocolate blanco, mermelada de frambuesa, sprinkles, colorante comestible.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/unicorn1.jpg',
    image2: '/images/cakes/unicorn2.jpg',
    image3: '/images/cakes/unicorn3.jpg',
    image4: '/images/cakes/unicorn4.jpg',
  },
  {
    name: 'Cookies & Cream',
    category: 'tortas',
    description:
      'Nuestra torta de Cookies & Cream cuenta con 4 capas de bizcochuelo de chocolate con buttercream de vainilla y relleno de Oreos trituradas, decorado con buttercream y migas de Oreo, ganache de chocolate y Oreos enteras.',
    price: 2500,
    ingredients:
      'Harina 000, azúcar, huevos, aceite de girasol, buttermilk, café, chocolate semi amargo, azúcar impalpable, manteca, leche entera, crema, galletitas oreo, cacao, bicarbonato de sodio, sal.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/cookiescream1.jpg',
    image2: '/images/cakes/cookiescream2.jpg',
    image3: '/images/cakes/cookiescream3.jpg',
    image4: '/images/cakes/cookiescream4.jpg',
  },
  {
    name: 'Chocolate',
    category: 'tortas',
    description:
      '4 capas de bizcochuelo de chocolate semi amargo. Cubierta y rellena de queso crema con chocolate. Decorada con ganache de chocolate, remolinos de chocolate y trufas de chocolate caseras.',
    price: 2500,
    ingredients:
      'Cacao amargo, harina 000, azúcar, huevos, aceite de girasol, buttermilk, manteca, azúcar impalpable, chocolate amargo, queso crema, crema, café, bicarbonato de sodio, sal.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/chocolate1.jpg',
    image2: '/images/cakes/chocolate2.jpg',
    image3: '/images/cakes/chocolate3.jpg',
    image4: '/images/cakes/chocolate4.jpg',
  },
  {
    name: 'Piñata',
    category: 'tortas',
    description:
      'Una torta colorida con una sorpresa en su interior. 4 capas de nuestro famoso bizcochuelo de vainilla, ligero y esponjoso, buttercream de vainilla y mermelada de frambuesa, repleta de rocklets y cubierta de sprikles.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, escencia de vainilla, mermelada de frambuesa, rocklets, sprinkles.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/pinata1.jpg',
    image2: '/images/cakes/pinata2.jpg',
    image3: '/images/cakes/pinata3.jpg',
    image4: '/images/cakes/pinata4.jpg',
  },
  {
    name: 'Red Velvet',
    category: 'tortas',
    description:
      'Un clásico. Bizcochuelo de terciopelo rojo súper denso, húmedo y ácido de cacao y vainilla en 4 capas con relleno de queso crema y glaseado.',
    price: 2250,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar implapable, queso crema, cacao amargo, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    portions: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    size: ['15cm', '20cm', '24cm'],
    image: '/images/cakes/redvelvet1.jpg',
    image2: '/images/cakes/redvelvet2.jpg',
    image3: '/images/cakes/redvelvet3.jpg',
    image4: '/images/cakes/redvelvet4.jpg',
  },
  {
    name: "treat yo' self",
    category: 'cupcakes',
    description:
      'Una mezcla de nuestros mejores cupcakes. Te los ganaste! Cada docena incluye un mix de: Pretzels con caramelo salado, Cookies & Cream, Smores, Unicornio y Frambuesa.',
    price: 1600,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cupcakes/treat1.jpg',
    image2: '/images/cupcakes/treat2.jpg',
    image3: '/images/cupcakes/treat3.jpg',
    image4: '/images/cupcakes/treat4.jpg',
  },
  {
    name: 'clasicos',
    category: 'cupcakes',
    description:
      'Una mezcla de sabores de cupcakes clásicos perfecta para fiestas y regalos: vainilla, chocolate triple, red velvet y caramelo salado.',
    price: 1400,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cupcakes/classic1.jpg',
    image2: '/images/cupcakes/classic2.jpg',
    image3: '/images/cupcakes/classic3.jpg',
    image4: '/images/cupcakes/classic4.jpg',
  },
  {
    name: 'millonarios',
    category: 'cupcakes',
    description:
      'Red velvet, chocolate y caramelo salado. Glaseado de Queso Crema. Glaseado de chocolate. Glaseado de caramelo salado. Llovizna de ganache de chocolate. Llovizna de caramelo. Chocolates artesanales. Merengues cubiertos de oro. Oreos.',
    price: 1800,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cupcakes/billionaires1.jpg',
    image2: '/images/cupcakes/billionaires2.jpg',
    image3: '/images/cupcakes/billionaires3.jpg',
    image4: '/images/cupcakes/billionaires4.jpg',
  },
  {
    name: 'Vegan Selection',
    category: 'cupcakes',
    description:
      'Una selección de nuestros sabores de cupcakes veganos favoritos: Red Velvet, Chocolate, Oreo y Volcán de Chocolate.',
    price: 1800,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cupcakes/vegan1.jpg',
    image2: '/images/cupcakes/vegan2.jpg',
    image3: '/images/cupcakes/vegan3.jpg',
    image4: '/images/cupcakes/vegan4.jpg',
  },
  {
    name: 'chocolate & red velvet',
    category: 'cupcakes',
    description:
      'Una mezcla de cupcakes de vainilla, chocolate triple y red velvet.',
    price: 1400,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cupcakes/vanilla1.jpg',
    image2: '/images/cupcakes/vanilla2.jpg',
    image3: '/images/cupcakes/vanilla3.jpg',
    image4: '/images/cupcakes/vanilla4.jpg',
  },
  {
    name: 'cookies estilo new york',
    category: 'cookies',
    description:
      'Cookies estilo New York recién horneadas elaboradas con los mejores ingredientes. Cada caja contiene 6: Chips de Chocolate, Red Velvet, Chocolate Doble, Birthday Cake, Avena con Pasas y Chocolate Blanco con Frambuesa.',
    price: 900,
    ingredients:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    image: '/images/cookies/cookies1.jpg',
    image2: '/images/cookies/cookies2.jpg',
    image3: '/images/cookies/cookies3.jpg',
    image4: '/images/cookies/cookies4.jpg',
  },
];

export default products;
