import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import useFetchData from "@/hooks/useFetchData";
import { ResearchDetail } from "@/interface/interface";
import Details from "@/pageComponents/research/Details";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function ResearchDetail() {
  const router = useRouter();
  const { research_title } = router.query;
  const { fetchedData } = useFetchData(`/research/detail/${research_title}`);
  const researchData: ResearchDetail = fetchedData;
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Research" description="" og_image="" />
      <CommonBanner
        headerName="NMC Research"
        imageLink="https://img.freepik.com/free-photo/chemist-nurse-sitting-scientific-equipped-lab-examining-virus-evolution-using-high-tech-researching-treatment-against-covid19-virus_482257-480.jpg?t=st=1711624620~exp=1711628220~hmac=e3e9362229f3e4d1bf72436412ae4c7240814d7428da9e8a8e2e1ba87258e4db&w=1380"
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
