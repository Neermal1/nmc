interface Gallery {
  id: number;
  name: string;
  slug: string;
  image: string;
  status: string;
  image_link: string;
}
interface GalleryImage {
  id: number;
  gallery_id: string;
  image: string;
  status: string;
  image_link: string;
}
