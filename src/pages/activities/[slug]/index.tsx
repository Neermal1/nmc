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
      <Metatag
        heading="NMC"
        subheading={activity?.detail?.title || "Activities"}
        description={activity?.detail?.meta_description}
        og_image={activity?.detail?.image_link}
      />
      <CommonBanner
        headerName="Activities"
        imageLink="/images/Banners/Banner1.png"
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
