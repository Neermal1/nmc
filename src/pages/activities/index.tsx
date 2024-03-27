import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import ActivitiesList from "@/pageComponents/activities/ActivitiesList";
import Metatag from "@/utils/Metatag";

export default function Activities() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Activities" />
      <CommonBanner
        headerName="Activities"
        imageLink="https://www.facs.org/media/hu1dq3y5/638602068.jpg?rnd=132960668912900000"
      />
      <ActivitiesList />
    </Layout>
  );
}
