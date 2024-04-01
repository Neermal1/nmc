import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import CareerList from "@/pageComponents/career/CareerList";
import Metatag from "@/utils/Metatag";

export default function Career() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Career"
        og_image="/images/ogImage/homePage.png"
      />
      <CommonBanner
        headerName="Career at NMC"
        imageLink="/images/Banners/Banner2.png"
      />
      <CareerList />
    </Layout>
  );
}
