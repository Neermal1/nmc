import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import JobDetail from "@/pageComponents/career/Details";
import Metatag from "@/utils/Metatag";

export default function CareerDetail({ data }: any) {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading={data?.meta_title || "Career"}
        description={data?.meta_description || ""}
        og_image={data?.image_link}
      />
      <JobDetail data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`vacancy/${params?.career_name}`);
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
            `vacancy/${params?.career_name}`
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
