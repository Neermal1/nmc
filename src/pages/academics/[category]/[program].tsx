/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import ProgramDetails from "@/pageComponents/academics/ProgramDetails";
import ProgramContent from "@/pageComponents/academics/ProgramDetails";
import Metatag from "@/utils/Metatag";

export default function ProgramDetail({ data }: any) {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading={data?.meta_title || "Academics"}
        description={data?.meta_description || ""}
        og_image={data?.image_link}
      />
      <ProgramDetails data={data} />
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`academics/detail/${params?.program}`);
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
            `academics/detail/${params?.slug}`
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
