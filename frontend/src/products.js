const products = [
  {
    _id: '1',
    titulo: 'Frambuesa y chocolate',
    descripcion:
      '4 capas de bizcochuelo marmolado de frambuesa relleno y decorado con buttercream de chocolate blanco y mermelada de frambuesa. Decorado con un goteo de chocolate blanco y merenguitos.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina levadante, azúcar impalpable, escencia de vainilla, leche entera, chocolate blanco y frambuesas.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/raspberry1.jpg',
    imagen2: '/images/cakes/raspberry2.jpg',
    imagen3: '/images/cakes/raspberry3.jpg',
    imagen4: '/images/cakes/raspberry4.jpg',
  },
  {
    _id: '2',
    titulo: 'lluvia de limón',
    descripcion:
      'Suave Bizcochuelo de limón relleno con buttercream de limón y curd de limón. Decorado con buttercream de limón, merenguitos triturados, lluvia de curd de limón y crumble.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina levadante, azúcar impalpable, escencia de vainilla, leche entera y limones.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/lemon1.jpg',
    imagen2: '/images/cakes/lemon2.jpg',
    imagen3: '/images/cakes/lemon3.jpg',
    imagen4: '/images/cakes/lemon4.jpg',
  },
  {
    _id: '3',
    titulo: 'Smores',
    descripcion:
      '4 capas de bizcochuelo de chocolate intenso relleno con buttercream de caramelo salado y galletitas. Decorado con buttercream de vainilla y chocolate, doble ganache y galletitas y cubierto con merengue italiano y más galletitas.',
    precio: 2500,
    ingredientes:
      'Cacao amargo, harina 000, manteca, azúcar, huevos, buttermilk, azúcar impalpable, aceite de girasol, crema, escencia de vainilla, chocolate semi amargo, café, bicarbonato de sodio, sal, galletitas.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/smores1.jpg',
    imagen2: '/images/cakes/smores2.jpg',
    imagen3: '/images/cakes/smores3.jpg',
    imagen4: '/images/cakes/smores4.jpg',
  },
  {
    _id: '4',
    titulo: 'Frambuesa marmolada',
    descripcion:
      '8 capas de bizcochulo marmolado de frambuesa y vainilla con un relleno de frambuesas fresca y buttercream. Decorado con buttercream de vainilla y frambuesa.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, escencia de vainilla, frambuesas.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/ripple1.jpg',
    imagen2: '/images/cakes/ripple2.jpg',
    imagen3: '/images/cakes/ripple3.jpg',
    imagen4: '/images/cakes/ripple4.jpg',
  },
  {
    _id: '5',
    titulo: 'Ferrero Rocher',
    descripcion:
      '8 capas de bizcochuelo de chocolate y avellanas, rellenas de buttercream de chocolate, capas de Nutella y avellanas. Decorado con ganache de chocolate, merenguitos y más avellanas.',
    precio: 2500,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, harina 000, buttermilk, aceite de girasol, avellanas, crema, azúcar impalpable, chocolate semia amargo, nutella, café, leche entera, bicarbonato de sodio.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/ferrero1.jpg',
    imagen2: '/images/cakes/ferrero2.jpg',
    imagen3: '/images/cakes/ferrero3.jpg',
    imagen4: '/images/cakes/ferrero4.jpg',
  },
  {
    _id: '6',
    titulo: 'Golosinas',
    descripcion:
      '4 capas de bizcochuelo marmolado en colores pastel, relleno y cubierto con buttercream de vainilla. Decorado con golosinas.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, golosinas (contienen gelatina), chocolate blanco, escencia de vainilla, colorante comestible.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/mix1.jpg',
    imagen2: '/images/cakes/mix2.jpg',
    imagen3: '/images/cakes/mix3.jpg',
    imagen4: '/images/cakes/mix4.jpg',
  },
  {
    _id: '7',
    titulo: 'Arcoiris',
    descripcion:
      'La clave para la torta arcoíris perfecta está en los colores y las capas: trabajamos duro para hacer el nuestro con 6 capas de bizcocho de vainilla de colores brillantes en proporciones perfectas, buttercream de vainilla clásica y una decoración de arcoíris espolvoreada sprinkles.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, azúcar implapable, escencia de vainilla, leche entera, sprinkles, colorante comestible.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/rainbow1.jpg',
    imagen2: '/images/cakes/rainbow2.jpg',
    imagen3: '/images/cakes/rainbow3.jpg',
    imagen4: '/images/cakes/rainbow4.jpg',
  },
  {
    _id: '8',
    titulo: 'Unicornio',
    descripcion:
      'Nuestra increíble torta unicornio cuenta con un biscochuelo de vainilla con sprinkles, buttercream de vainilla y relleno de mermelada. Cubierta buttercream en degradé con los colores del arco iris en tonos pastel y decorado con chocolate blanco y merenguitos.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, escencia de vainilla, leche entera, chocolate blanco, mermelada de frambuesa, sprinkles, colorante comestible.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/unicorn1.jpg',
    imagen2: '/images/cakes/unicorn2.jpg',
    imagen3: '/images/cakes/unicorn3.jpg',
    imagen4: '/images/cakes/unicorn4.jpg',
  },
  {
    _id: '9',
    titulo: 'Cookies & Cream',
    descripcion:
      'Nuestra torta de Cookies & Cream cuenta con 4 capas de bizcochuelo de chocolate con buttercream de vainilla y relleno de Oreos trituradas, decorado con buttercream y migas de Oreo, ganache de chocolate y Oreos enteras.',
    precio: 2500,
    ingredientes:
      'Harina 000, azúcar, huevos, aceite de girasol, buttermilk, café, chocolate semi amargo, azúcar impalpable, manteca, leche entera, crema, galletitas oreo, cacao, bicarbonato de sodio, sal.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/cookiescream1.jpg',
    imagen2: '/images/cakes/cookiescream2.jpg',
    imagen3: '/images/cakes/cookiescream3.jpg',
    imagen4: '/images/cakes/cookiescream4.jpg',
  },
  {
    _id: '10',
    titulo: 'Chocolate',
    descripcion:
      '4 capas de bizcochuelo de chocolate semi amargo. Cubierta y rellena de queso crema con chocolate. Decorada con ganache de chocolate, remolinos de chocolate y trufas de chocolate caseras.',
    precio: 2500,
    ingredientes:
      'Cacao amargo, harina 000, azúcar, huevos, aceite de girasol, buttermilk, manteca, azúcar impalpable, chocolate amargo, queso crema, crema, café, bicarbonato de sodio, sal.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/chocolate1.jpg',
    imagen2: '/images/cakes/chocolate2.jpg',
    imagen3: '/images/cakes/chocolate3.jpg',
    imagen4: '/images/cakes/chocolate4.jpg',
  },
  {
    _id: '11',
    titulo: 'Piñata',
    descripcion:
      'Una torta colorida con una sorpresa en su interior. 4 capas de nuestro famoso bizcochuelo de vainilla, ligero y esponjoso, buttercream de vainilla y mermelada de frambuesa, repleta de rocklets y cubierta de sprikles.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina leudante, azúcar impalpable, leche entera, escencia de vainilla, mermelada de frambuesa, rocklets, sprinkles.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/piñata1.jpg',
    imagen2: '/images/cakes/piñata2.jpg',
    imagen3: '/images/cakes/piñata3.jpg',
    imagen4: '/images/cakes/piñata4.jpg',
  },
  {
    _id: '12',
    titulo: 'Red Velvet',
    descripcion:
      'Un clásico. Bizcochuelo de terciopelo rojo súper denso, húmedo y ácido de cacao y vainilla en 4 capas con relleno de queso crema y glaseado.',
    precio: 2250,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar implapable, queso crema, cacao amargo, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    porciones: ['15cm | 12 - 14', '20cm | 22 - 24', '24cm | 32 - 36'],
    diametro: ['15cm', '20cm', '24cm'],
    imagen: '/images/cakes/redvelvet1.jpg',
    imagen2: '/images/cakes/redvelvet2.jpg',
    imagen3: '/images/cakes/redvelvet3.jpg',
    imagen4: '/images/cakes/redvelvet4.jpg',
  },
  {
    _id: '13',
    titulo: "treat yo' self",
    descripcion:
      'Una mezcla de nuestros mejores cupcakes. Te los ganaste! Cada docena incluye un mix de: Pretzels con caramelo salado, Cookies & Cream, Smores, Unicornio y Frambuesa.',
    precio: 1600,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cupcakes/treat1.jpg',
    imagen2: '/images/cupcakes/treat2.jpg',
    imagen3: '/images/cupcakes/treat3.jpg',
    imagen4: '/images/cupcakes/treat4.jpg',
  },
  {
    _id: '14',
    titulo: 'clasicos',
    descripcion:
      'Una mezcla de sabores de cupcakes clásicos perfecta para fiestas y regalos: vainilla, chocolate triple, red velvet y caramelo salado.',
    precio: 1400,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cupcakes/classic1.jpg',
    imagen2: '/images/cupcakes/classic2.jpg',
    imagen3: '/images/cupcakes/classic3.jpg',
    imagen4: '/images/cupcakes/classic4.jpg',
  },
  {
    _id: '15',
    titulo: 'millonarios',
    descripcion:
      'Red velvet, chocolate y caramelo salado. Glaseado de Queso Crema. Glaseado de chocolate. Glaseado de caramelo salado. Llovizna de ganache de chocolate. Llovizna de caramelo. Chocolates artesanales. Merengues cubiertos de oro. Oreos.',
    precio: 1800,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cupcakes/billionaires1.jpg',
    imagen2: '/images/cupcakes/billionaires2.jpg',
    imagen3: '/images/cupcakes/billionaires3.jpg',
    imagen4: '/images/cupcakes/billionaires4.jpg',
  },
  {
    _id: '16',
    titulo: 'Vegan Selection',
    descripcion:
      'Una selección de nuestros sabores de cupcakes veganos favoritos: Red Velvet, Chocolate, Oreo y Volcán de Chocolate.',
    precio: 1800,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cupcakes/vegan1.jpg',
    imagen2: '/images/cupcakes/vegan2.jpg',
    imagen3: '/images/cupcakes/vegan3.jpg',
    imagen4: '/images/cupcakes/vegan4.jpg',
  },
  {
    _id: '17',
    titulo: 'chocolate & red velvet',
    descripcion:
      'Una mezcla de cupcakes de vainilla, chocolate triple y red velvet.',
    precio: 1400,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cupcakes/vanilla1.jpg',
    imagen2: '/images/cupcakes/vanilla2.jpg',
    imagen3: '/images/cupcakes/vanilla3.jpg',
    imagen4: '/images/cupcakes/vanilla4.jpg',
  },
  {
    _id: '18',
    titulo: 'cookies estilo new york',
    descripcion:
      'Cookies estilo New York recién horneadas elaboradas con los mejores ingredientes. Cada caja contiene 6: Chips de Chocolate, Red Velvet, Chocolate Doble, Birthday Cake, Avena con Pasas y Chocolate Blanco con Frambuesa.',
    precio: 900,
    ingredientes:
      'Manteca, azúcar, huevos, harina 000, azúcar impalpable, queso crema, cacao, buttermilk, vinagre de sidra, colorante rojo comestible, escencia de vainilla, sprinkles, bicarbonato de sodio, sal.',
    imagen: '/images/cookies/cookies1.jpg',
    imagen2: '/images/cookies/cookies2.jpg',
    imagen3: '/images/cookies/cookies3.jpg',
    imagen4: '/images/cookies/cookies4.jpg',
  },
];

export default products;
