import Layout from "@/components/Layout/Layout";
import useFetchData from "@/hooks/useFetchData";
import { IFacility } from "@/interface/interface";
import DetailsComponent from "@/pageComponents/facilities/Details";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function FacilityDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { fetchedData } = useFetchData(`/facility/${slug}`);
  const facility: IFacility = fetchedData;
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading={facility?.title || "Facilities"}
        description={facility?.meta_description}
        og_image={facility?.image_link}
      />
      <DetailsComponent
        title={facility?.title}
        description={facility?.description}
        imageLink={facility?.image_link}
      />
    </Layout>
  );
}
