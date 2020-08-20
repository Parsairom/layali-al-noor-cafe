import { images } from "./images";

export type GalleryCategoryId = "interior" | "coffee" | "desserts" | "events";

export interface GalleryItem {
  id: string;
  category: GalleryCategoryId;
  image: string;
}

function buildCategory(category: GalleryCategoryId, urls: readonly string[]): GalleryItem[] {
  return urls.map((image, index) => ({
    id: `${category}-${index + 1}`,
    category,
    image,
  }));
}

export const galleryItems: GalleryItem[] = [
  ...buildCategory("interior", images.galleryInterior),
  ...buildCategory("coffee", images.galleryCoffee),
  ...buildCategory("desserts", images.galleryDesserts),
  ...buildCategory("events", images.galleryEvents),
];

export const galleryCategoryIds: GalleryCategoryId[] = ["interior", "coffee", "desserts", "events"];
