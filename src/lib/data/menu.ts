import { images } from "./images";

export type MenuCategoryId =
  | "arabicCoffee"
  | "specialtyCoffee"
  | "desserts"
  | "breakfast"
  | "signatureDrinks";

export interface MenuCategory {
  id: MenuCategoryId;
  image: string;
  itemIds: string[];
}

export interface MenuItemData {
  id: string;
  category: MenuCategoryId;
  price: number;
  featured?: boolean;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "arabicCoffee",
    image: images.menuCategoryArabicCoffee,
    itemIds: ["gahwaTraditional", "gahwaSaffron", "gahwaRose", "qahwaOmani", "gahwaSada"],
  },
  {
    id: "specialtyCoffee",
    image: images.menuCategorySpecialtyCoffee,
    itemIds: ["signatureEspresso", "goldDustCappuccino", "saffronLatte", "dateFlatWhite", "turkishCoffee"],
  },
  {
    id: "desserts",
    image: images.menuCategoryDesserts,
    itemIds: ["kunafaPistachio", "ummAliRoyale", "dateTahiniTart", "saffronBasbousa", "baklavaSelection"],
  },
  {
    id: "breakfast",
    image: images.menuCategoryBreakfast,
    itemIds: ["emiratiChebab", "balaleetSaffron", "manakishTrio", "shakshukaLayali", "datesLabnehBoard"],
  },
  {
    id: "signatureDrinks",
    image: images.menuCategorySignatureDrinks,
    itemIds: ["roseSaffronMocktail", "hibiscusElixir", "dateMilkshake", "cardamomChaiLatte", "goldenLemonade"],
  },
];

export const menuItems: MenuItemData[] = [
  { id: "gahwaTraditional", category: "arabicCoffee", price: 28, featured: true },
  { id: "gahwaSaffron", category: "arabicCoffee", price: 32 },
  { id: "gahwaRose", category: "arabicCoffee", price: 34 },
  { id: "qahwaOmani", category: "arabicCoffee", price: 30 },
  { id: "gahwaSada", category: "arabicCoffee", price: 26 },

  { id: "signatureEspresso", category: "specialtyCoffee", price: 24 },
  { id: "goldDustCappuccino", category: "specialtyCoffee", price: 32, featured: true },
  { id: "saffronLatte", category: "specialtyCoffee", price: 34 },
  { id: "dateFlatWhite", category: "specialtyCoffee", price: 30 },
  { id: "turkishCoffee", category: "specialtyCoffee", price: 28 },

  { id: "kunafaPistachio", category: "desserts", price: 42, featured: true },
  { id: "ummAliRoyale", category: "desserts", price: 38 },
  { id: "dateTahiniTart", category: "desserts", price: 36 },
  { id: "saffronBasbousa", category: "desserts", price: 32 },
  { id: "baklavaSelection", category: "desserts", price: 40 },

  { id: "emiratiChebab", category: "breakfast", price: 48 },
  { id: "balaleetSaffron", category: "breakfast", price: 52 },
  { id: "manakishTrio", category: "breakfast", price: 46 },
  { id: "shakshukaLayali", category: "breakfast", price: 58, featured: true },
  { id: "datesLabnehBoard", category: "breakfast", price: 44 },

  { id: "roseSaffronMocktail", category: "signatureDrinks", price: 36, featured: true },
  { id: "hibiscusElixir", category: "signatureDrinks", price: 30 },
  { id: "dateMilkshake", category: "signatureDrinks", price: 34 },
  { id: "cardamomChaiLatte", category: "signatureDrinks", price: 28 },
  { id: "goldenLemonade", category: "signatureDrinks", price: 26 },
];

export const featuredMenuItemIds = menuItems.filter((item) => item.featured).map((item) => item.id);
