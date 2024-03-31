import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import NewsInfo from "@/pageComponents/NewsDetail/components/NewsInfo";
import Metatag from "@/utils/Metatag";

const NewsDetail = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        type="article"
        heading={`${
          data?.detail?.meta_title ? data?.detail?.meta_title : "NMC"
        }`}
        subheading={`${
          data?.detail?.meta_description
            ? data?.detail?.meta_description
            : "News"
        }`}
        og_image={`${data?.detail?.image_link}`}
        description={`${data?.detail?.meta_description}`}
      />

      <NewsInfo newsInfo={data} />
    </Layout>
  );
};

export default NewsDetail;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`news/detail/${params?.news_name}`);

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
            `news/detail/${params?.news_name}`
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
