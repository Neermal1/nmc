import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import useFetchData from "@/hooks/useFetchData";
import { IActivityDetail } from "@/interface/interface";
import Details from "@/pageComponents/activities/Details";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;
  const { fetchedData } = useFetchData(`/activity/detail/${slug}`);
  const activity: IActivityDetail = fetchedData;
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Activities" og_image="" />
      <CommonBanner
        headerName="Activities"
        imageLink="https://www.facs.org/media/hu1dq3y5/638602068.jpg?rnd=132960668912900000"
      />
      <Details
        title={activity?.detail?.title}
        description={activity?.detail?.description || ""}
        imageLink={activity?.detail?.image_link}
        relatedActivities={activity?.related}
      />
    </Layout>
  );
}
