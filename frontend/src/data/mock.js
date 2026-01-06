// Mock data for Delirio Burger website

export const restaurantInfo = {
  name: "Delirio Burger",
  tagline: "El delirio de las hamburguesas",
  rating: 4.8,
  reviewCount: 191,
  priceRange: "20-30€",
  phone: "616 52 76 85",
  address: "Blvr. de Indalecio Prieto, 6, Vicálvaro, 28032 Madrid",
  instagram: "burgerdelirio",
  uberEatsUrl: "https://www.ubereats.com/es/store/delirio-burger",
  coordinates: "C93H+8Q Madrid"
};

export const schedule = [
  { day: "Lunes", hours: "13:00–16:30 / 20:00–24:00" },
  { day: "Martes", hours: "13:00–16:30 / 20:00–24:00" },
  { day: "Miércoles", hours: "Cerrado" },
  { day: "Jueves", hours: "13:00–16:30 / 20:00–24:00" },
  { day: "Viernes", hours: "13:00–16:30 / 20:00–24:00" },
  { day: "Sábado", hours: "13:00–16:30 / 20:00–24:00" },
  { day: "Domingo", hours: "13:00–16:30 / 20:00–24:00" }
];

export const burgers = [
  {
    id: 1,
    name: "DELIRIO",
    price: 15.00,
    description: "Carne de ternera, bacon, cebolla caramelizada, queso y salsa blanca especial.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/wm11tull_image.png"
  },
  {
    id: 2,
    name: "ROMA",
    price: 14.50,
    description: "Carne de ternera, tomate, lechuga, cebolla morada, bacon, queso cheddar y orégano.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/76136e69_image.png"
  },
  {
    id: 3,
    name: "CASTIZA",
    price: 15.00,
    description: "Carne de ternera, lechuga, tomate, pepinillo, queso cheddar y salsa roja.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/w566aptf_image.png"
  },
  {
    id: 4,
    name: "POTENCIA",
    price: 17.00,
    description: "Carne de ternera, lechuga, tomate, cebolla, champiñones, bacon, queso y una salsa secreta.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/z85plogw_image.png"
  },
  {
    id: 5,
    name: "AL FALLO",
    price: 15.00,
    description: "Carne de ternera, cebolla, champiñones, queso, jalapeños y salsa especial.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/q5peybo7_image.png"
  },
  {
    id: 6,
    name: "MEXICANA",
    price: 15.50,
    description: "Carne de ternera con guacamole, pico de gallo, jalapeños y salsa chipotle.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/ehe47va1_image.png"
  },
  {
    id: 7,
    name: "TRUFA",
    price: 17.50,
    description: "Carne de ternera, huevo a la plancha, bacon crujiente, patatas paja y salsa de trufa.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/waeqq5h8_image.png"
  },
  {
    id: 8,
    name: "CABRITA",
    price: 15.50,
    description: "Carne de ternera, queso de cabra, cebolla crujiente caramelizada y salsa especial.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/4xbdgmt0_image.png"
  }
];

export const starters = [
  {
    id: 1,
    name: "Tiras de Pollo",
    price: 12.50,
    description: "Crujientes tiras de pollo marinado con salsa Delirio.",
    image: null
  },
  {
    id: 2,
    name: "Tequeños",
    price: 10.50,
    description: "Deliciosos palitos de queso crujientes con salsa especial.",
    image: null
  },
  {
    id: 3,
    name: "Nachos Totopos",
    price: 13.50,
    description: "Nachos crujientes con queso fundido, jalapeños y salsa de la casa.",
    image: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/jw7ti89e_image.png"
  },
  {
    id: 4,
    name: "Alitas de Pollo",
    price: 13.50,
    description: "Alitas crujientes al estilo de Nueva Orleans con salsa agria y cilantro.",
    image: null
  },
  {
    id: 5,
    name: "Pulled Cheese Fries",
    price: 11.50,
    description: "Patatas crujientes con pulled pork tierno, tocino y salsa 'cheesey' de la casa.",
    image: null
  },
  {
    id: 6,
    name: "Bacon Cheese Fries",
    price: 12.00,
    description: "Patatas fritas con bacon crujiente y queso cheddar fundido.",
    image: null
  },
  {
    id: 7,
    name: "Trufa Deluxe Fries",
    price: 14.00,
    description: "Patatas fritas con salsa de trufa, parmesano y huevo a la plancha.",
    image: null
  }
];

export const meatOptions = [
  "Carne de ternera de corte especial",
  "Carne de ternera de primera calidad",
  "Carne de ternera de corte jugoso",
  "Carne de cerdo"
];

export const breadOptions = [
  "Pan brioche",
  "Pan de papa",
  "Pan negro de carbón"
];

export const reviews = [
  {
    id: 1,
    author: "Rubén",
    rating: 5,
    date: "Hace 3 semanas",
    text: "Estuvimos cenando un día entre semana. Es un local nuevo y muy pequeñito. La comida increíble, probamos la 'Potencia' y la del mes. Hamburguesas originales, muy buen sabor.",
    badge: "Local Guide · 448 reseñas"
  },
  {
    id: 2,
    author: "Fran Soriano",
    rating: 5,
    date: "Hace 3 meses",
    text: "Fuimos a probar y el acierto fue total. Tocamos a 20 euros por persona y las hamburguesas de una calidad tremenda.",
    badge: "Local Guide · 17 reseñas"
  },
  {
    id: 3,
    author: "Ana B Cabezas",
    rating: 5,
    date: "Hace 6 meses",
    text: "La comida increíble, probamos la 'Potencia', 'Castiza' y la del mes. Hamburguesas originales, muy buen sabor y con ingredientes de calidad. El servicio igual de bueno.",
    badge: "9 reseñas"
  },
  {
    id: 4,
    author: "María García",
    rating: 5,
    date: "Hace 2 meses",
    text: "La camarera y el dueño muy atentos, la tarta de queso buenísima! Mi favorita es la hamburguesa mexicana con una deliciosa cerveza 1906.",
    badge: "Local Guide"
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/titfldcb_image.png",
    alt: "Fachada de Delirio Burger",
    category: "local"
  },
  {
    id: 2,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/1a2rbm3p_image.png",
    alt: "Logo neón Delirio Burger",
    category: "local"
  },
  {
    id: 3,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/wm11tull_image.png",
    alt: "Hamburguesa Delirio",
    category: "platos"
  },
  {
    id: 4,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/waeqq5h8_image.png",
    alt: "Hamburguesa Trufa con huevo",
    category: "platos"
  },
  {
    id: 5,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/76136e69_image.png",
    alt: "Hamburguesa Roma",
    category: "platos"
  },
  {
    id: 6,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/ehe47va1_image.png",
    alt: "Hamburguesa Mexicana",
    category: "platos"
  },
  {
    id: 7,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/w566aptf_image.png",
    alt: "Hamburguesa Castiza",
    category: "platos"
  },
  {
    id: 8,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/4xbdgmt0_image.png",
    alt: "Hamburguesa Cabrita",
    category: "platos"
  },
  {
    id: 9,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/jw7ti89e_image.png",
    alt: "Nachos Totopos",
    category: "platos"
  },
  {
    id: 10,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/z85plogw_image.png",
    alt: "Hamburguesa Potencia",
    category: "platos"
  },
  {
    id: 11,
    src: "https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/q5peybo7_image.png",
    alt: "Hamburguesa Al Fallo",
    category: "platos"
  }
];
