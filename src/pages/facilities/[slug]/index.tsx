import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import useFetchData from "@/hooks/useFetchData";
import { IFacility, IFacilityDetail } from "@/interface/interface";
import DetailsComponent from "@/pageComponents/facilities/Details";
import Metatag from "@/utils/Metatag";
import { Descriptions } from "antd";
import { useRouter } from "next/router";

export default function FacilityDetail({ data }: any) {
  const router = useRouter();
  const { slug } = router.query;
  const { fetchedData } = useFetchData(`/facility/${slug}`);
  console.log("facility");
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading={data?.detail?.meta_title ? data?.detail?.meta_title : "NMC"}
        description={
          data?.detail?.meta_description ? data?.detail?.meta_description : ""
        }
        og_image={data?.detail?.image_link ? data?.detail?.image_link : ""}
      />
      <CommonBanner
        headerName="Facilities"
        imageLink="/images/Banners/facilities.jpg"
      />
      <DetailsComponent
        title={data?.detail?.title}
        description={data?.detail?.description}
        imageLink={data?.detail?.image_link}
        relatedFacilities={data?.related}
      />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`facility/${params?.slug}`);

    return {
      props: { data },
    };
  } catch (e: any) {
    if (e.response && e.response.status === 429) {
      const retryAfter = parseInt(e.response.headers["retry-after"]);
      console.log("This is retry after", retryAfter);
      if (!isNaN(retryAfter)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        try {
          console.log("refetching");
          const { data } = await SSR_fetchData(`facility/${params?.slug}`);
          return {
            props: {
              data,
            },
          };
        } catch (retryError) {
          console.error("Retry failed:", retryError);
        }
      }

      return {
        props: {
          data: null,
        },
      };
    } else {
      return {
        props: {
          data: null,
        },
      };
    }
  }
}
