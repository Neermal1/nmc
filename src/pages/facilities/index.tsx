import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import FacilitiesList from "@/pageComponents/facilities/FacilitiesList";
import Metatag from "@/utils/Metatag";

export default function Facilities() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Facilities"
        og_image="/images/ogImage/homePage.png"
      />
      <CommonBanner
        headerName="Facilities"
        imageLink="/images/Banners/Banner2.png"
      />
      <FacilitiesList />
    </Layout>
  );
}
