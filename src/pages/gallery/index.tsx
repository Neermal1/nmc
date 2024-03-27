import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import GalleryList from "@/pageComponents/gallery/GalleryList";
import Metatag from "@/utils/Metatag";

export default function Gallery() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Gallery" og_image="" />
      <CommonBanner
        headerName="NMC Gallery"
        imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />
      <GalleryList />
    </Layout>
  );
}
