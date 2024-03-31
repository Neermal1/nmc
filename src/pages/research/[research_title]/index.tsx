import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import useFetchData from "@/hooks/useFetchData";
import { ResearchDetail } from "@/interface/interface";
import Details from "@/pageComponents/research/Details";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { research_title } = router.query;
  const { fetchedData } = useFetchData(`/research/detail/${research_title}`);
  const researchData: ResearchDetail = fetchedData;
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading={researchData?.detail?.title || "Research"}
        description={researchData?.detail?.meta_description}
        og_image={researchData?.detail?.image_link}
      />
      <CommonBanner
        headerName="NMC Research"
        imageLink="/images/Banners/ResearchBanner.png"
      />
      <Details
        title={researchData?.detail?.title}
        imageLink={researchData?.detail?.image_link}
        description={researchData?.detail?.description}
        relatedResearches={researchData?.related}
      />
    </Layout>
  );
}
