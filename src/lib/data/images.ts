function unsplash(id: string, params = "auto=format&fit=crop&w=1974&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  homeHero: unsplash("1552566626-52f8b828add9", "auto=format&fit=crop&w=2400&q=80"),
  homeIntro: unsplash("1724514075334-221460871abb"),
  homeLocation: unsplash("1518684079-3c830dcef090"),

  aboutHero: unsplash("1785960862235-ec47243e0a94", "auto=format&fit=crop&w=2400&q=80"),
  aboutStory1: unsplash("1605881285484-e104b25cc64f"),
  aboutStory2: unsplash("1462007895615-c8c073bebcd8"),
  aboutDivider: unsplash("1447933601403-0c6688de566e", "auto=format&fit=crop&w=2400&q=70"),

  menuHero: unsplash("1512568400610-62da28bc8a13", "auto=format&fit=crop&w=2400&q=80"),
  menuCategoryArabicCoffee: unsplash("1604924434662-4127d9fa3070"),
  menuCategorySpecialtyCoffee: unsplash("1495474472287-4d71bcdd2085"),
  menuCategoryDesserts: unsplash("1735567430418-5eb0c3069abf"),
  menuCategoryBreakfast: unsplash("1762631934548-7b83d4bdcaa1"),
  menuCategorySignatureDrinks: unsplash("1529892485617-25f63cd7b1e9"),

  galleryInterior: [
    unsplash("1737116846855-26bfe6387515"),
    unsplash("1636928837218-f2b56d5a7861"),
    unsplash("1676716260600-217008b2e00a"),
    unsplash("1676716244847-3fae1a2afb5b"),
  ],
  galleryCoffee: [
    unsplash("1541167760496-1628856ab772"),
    unsplash("1497636577773-f1231844b336"),
    unsplash("1670404161009-29548c027d06"),
    unsplash("1503240778100-fd245e17a273"),
  ],
  galleryDesserts: [
    unsplash("1617806501553-d3a6a3a7b227"),
    unsplash("1617806501441-2a4a45c5316c"),
    unsplash("1640040520679-2ace58742f22"),
  ],
  galleryEvents: [
    unsplash("1669310095420-8cd109dba5cb"),
    unsplash("1652707228067-25672fa0b082"),
    unsplash("1593515463811-63535505f44a"),
  ],
} as const;
