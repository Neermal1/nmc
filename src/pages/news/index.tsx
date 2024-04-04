import Layout from "@/components/Layout/Layout";
import AllNews from "@/pageComponents/AllNews/components/AllNews";
import Metatag from "@/utils/Metatag";
import { getNews } from "@/utils/getNews";

const NewsMainPage = ({ totalPosts, totalPages, activePage }: any) => {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Nepal Medical College"
        og_image="https://nmc-api.terracecafe.com.np/upload/images/settings/test.jpeg.jpg"
        description="Nepal Medical College"
        type="article"
      />
      <AllNews
        totalPages={totalPages && totalPages}
        totalPosts={totalPosts && totalPosts}
        activePage={activePage}
      />
    </Layout>
  );
};

export default NewsMainPage;

export async function getStaticProps() {
  try {
    const props = await getNews(1);
    return {
      props,
    };
  } catch (e: any) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
