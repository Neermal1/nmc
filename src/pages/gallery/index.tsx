import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import GalleryList from "@/pageComponents/gallery/GalleryList";
import Metatag from "@/utils/Metatag";

export default function Gallery() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Gallery"
        og_image="/images/ogImage/homePage.png"
      />
      <CommonBanner
        headerName="Gallery"
        imageLink="/images/Banners/gallery.jpg"
      />
      <GalleryList />
    </Layout>
  );
}
