import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import AllNews from "@/pageComponents/AllNews/components/AllNews";
import Metatag from "@/utils/Metatag";

const AllNewsList = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${data?.meta_title}`}
        subheading="All News"
        og_image={`${data?.logo_link}`}
        description={`${data?.meta_description}`}
        type="article"
      />
      <AllNews />
    </Layout>
  );
};

export default AllNewsList;

export async function getServerSideProps() {
  try {
    const { data } = await SSR_fetchData("company-profile");
    return {
      props: {
        data,
      },
    };
  } catch (e: any) {
    if (e.response && e.response.status === 429) {
      const retryAfter = parseInt(e.response.headers["retry-after"]);
      console.log("This is retry after", retryAfter);
      if (!isNaN(retryAfter)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        try {
          console.log("refetching");
          const { data } = await SSR_fetchData(`company-profile`);
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
