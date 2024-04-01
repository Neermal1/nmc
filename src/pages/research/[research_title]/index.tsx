import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Details from "@/pageComponents/research/Details";
import Metatag from "@/utils/Metatag";

export default function Detail({ data }: any) {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading={data?.detail?.meta_title || "Research"}
        description={data?.detail?.meta_description || ""}
        og_image={data?.detail?.image_link}
      />
      <CommonBanner
        headerName="NMC Research"
        imageLink="/images/Banners/ResearchBanner.png"
      />
      <Details
        title={data?.detail?.title}
        imageLink={data?.detail?.image_link}
        description={data?.detail?.description}
        relatedResearches={data?.related}
      />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(
      `research/detail/${params?.research_title}`
    );
    console.log("This is data", data);

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
          const { data } = await SSR_fetchData(
            `research/detail/${params?.research_title}`
          );
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
