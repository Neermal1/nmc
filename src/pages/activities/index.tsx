import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import ActivitiesList from "@/pageComponents/activities/ActivitiesList";
import Metatag from "@/utils/Metatag";

export default function Activities() {
  return (
    <Layout>
      <Metatag heading="Nepal Medical College" subheading="Activities" og_image="/images/ogImage/homePage.png"/>
      <CommonBanner
        headerName="Activities"
        imageLink="/images/Banners/Banner1.png"
      />
      <ActivitiesList />
    </Layout>
  );
}
