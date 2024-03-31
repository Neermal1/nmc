import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import Details from "@/pageComponents/activities/Details";
import Metatag from "@/utils/Metatag";

export default function Detail({ data }: any) {
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading={data?.detail?.title || "Activities"}
        description={data?.detail?.meta_description}
        og_image={data?.detail?.image_link}
      />
      <CommonBanner
        headerName="Activities"
        imageLink="/images/Banners/Banner1.png"
      />
      <Details
        title={data?.detail?.title}
        description={data?.detail?.description || ""}
        imageLink={data?.detail?.image_link}
        relatedActivities={data?.related}
      />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`activity/detail/${params?.slug}`);
    console.log(data);

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
            `activity/detail/${params?.slug}`
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
