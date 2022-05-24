const { ObjectId } = require('mongodb');

const adminId = new ObjectId();
const superAdminId = new ObjectId();
const chandlerId = new ObjectId();

const products = [
  {
    name: "10 Capsules compatibles Nespresso Bio Pérou - AMADITO",
    price: "6.50",
    description:
      "Découvrez ce café moulu BIO originaire du Pérou aux notes aromatiques subtiles et équilibrées. Contenance : 10 capsules compatibles Nespresso.",
    image: "public/images/products/AZRE4356.jpg",
    seller: "AMADITO",
    ProductCode: "AZRE4356",
    user: adminId,
  },
  {
    name: "Capsules Aluminium Maestro CLASSICO compatibles Nespresso® x10 - LAVAZZA",
    price: "3.29",
    description:
      "Découvrez  les capsules en aluminium Classiques Maestro compatibles Nespresso®, l'authenticité d'un espresso italien.",
    image: "public/images/products/BGTF0090.jpg",
    seller: "LAVAZZA",
    ProductCode: "BGTF0090",
    user: adminId,
  },
  {
    name: "Café en Grain Le Café Lagrange DK - Meilleur Ouvrier de France - 200g",
    price: "10.50",
    description:
      "Découvrez  les capsules en aluminium Classiques Maestro compatibles Nespresso®, l'authenticité d'un espresso italien.",
    image: "public/images/products/TGIU8787.jpg",
    seller: "LAGRANGE",
    ProductCode: "TGIU8787",
    user: adminId,
  },
  {
    name: "50 dosettes ESE Blue Mountain - ORLANDO CAFFE",
    price: "36.90",
    description:
      "Ce café créé par Luigi Orlando est un mélange de café exclusif proposant un haut pourcentage de Blue Mountain de Jamaïque",
    image: "public/images/products/KOLP0932.jpg",
    seller: "ORLANDO CAFFE",
    ProductCode: "KOLP0932",
    user: adminId,
  },
  {
    name: "Café en grains bio : Pérou - Altura - 250g - Cafés Lugat",
    price: "7.20",
    description:
      "Ce café vous offre une une tasse tout en rondeur et un nez gourmand grâce aux notes intenses de cacao.",
    image: "public/images/products/NUTY6766.jpg",
    seller: "LUGAT",
    ProductCode: "NUTY6766",
    user: adminId,
  },
  {
    name: "Café en grains - Saveur Vanille - 125g - Les Petits Torréfacteurs",
    price: "3.95",
    description:
      "Dégustez ce café en grains aromatisé à la vanille et torréfié artisanalement en France par une équipe d'artisans torréfacteurs passionnés.",
    image: "public/images/products/AATR1134.jpg",
    seller: "LES PETITS TORREFACTEURS",
    ProductCode: "AATR1134",
    user: superAdminId,
  },
  {
    name: "36 dosettes souples Grand Arabica Intense - LEGAL",
    price: "4.65",
    description:
      "Prenez le temps de déguster ces excellentes dosettes Grand Arabica des maîtres torréfacteurs français Legal.",
    image: "public/images/products/WYGH8889.jpg",
    seller: "LEGAL",
    ProductCode: "WYGH8889",
    user: adminId,
  },
  {
    name: "Café en grains 100% Arabica - 250g - Caffè Vergnano",
    price: "7.40",
    description:
      "Découvrez ce café en grains 100% Arabica issu de plusieurs origines : Brésil, Nicaragua, Guatemala, Ethiopie.",
    image: "public/images/products/ABCL7867.jpg",
    seller: "VERGNANO",
    ProductCode: "ABCL7867",
    user: adminId,
  },
  {
    name: "8 Capsules Gran Riserva Cappuccino pour Nescafe® Dolce Gusto® - CAFFE CORSINI",
    price: "5.70",
    description:
      "Découvrez ces capsules compatibles Nescafe® Dolce Gusto® Cappuccino  de Caffè Corsini avec 8 capsules composées de café et 8 capsules composées de poudre de lait sucrée.",
    image: "public/images/products/JKKO1560.jpg",
    seller: "CORSINI",
    ProductCode: "JKKO1560",
    user: superAdminId,
  },
  {
    name: "Café moulu décaféiné - 100% Arabica - 250g - Pellini Caffè",
    price: "7.90",
    description:
      "Ce café moulu Pellini est un mélange d'Arabica décaféiné (décaféination sans solvant) en provenance de différents pays.",
    image: "public/images/products/LPMP9090.jpg",
    seller: "PELLINI",
    ProductCode: "LPMP9090",
    user: adminId,
  },
];

const users = [
  {
    _id: adminId,
    first_name: 'Admin',
    last_name: null,
    email: 'admin@coffee.com',
    // password = admin1
    password: '$2a$10$epDG7v9nJwblXjrRRc5oYO.F.MczbCrYvFSlv8cmWEAuSMKjh7HES',
    token: '',
    avatar: '',
    role: 'admin'
  },
  {
    _id: superAdminId,
    first_name: 'Super Admin',
    last_name: null,
    email: 'super@coffee.com',
    // password = super1
    password: '$2a$10$fl/q9JcqB8Cgwf5vWzlkVujp3bYBfxPcDTiS70CkXJF/TCgIRuB5.',
    token: '',
    avatar: '',
    role: 'superadmin'
  },
  {
    _id: chandlerId,
    first_name: 'Chandler',
    last_name: null,
    email: 'chandler@coffee.com',
    // password = chandler
    password: '$2a$10$vsM11r37P/pZwUhYbJWdXugvJYX1XtIxsgR5kV3T9ewEsoVZXOVA6',
    token: '',
    avatar: '',
    role: 'user'
  },
];

module.exports = {
  products,
  users,
};
