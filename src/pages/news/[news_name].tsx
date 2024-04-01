import Layout from "@/components/Layout/Layout";
import NewsInfo from "@/pageComponents/NewsDetail/components/NewsInfo";
import Metatag from "@/utils/Metatag";

const NewsDetail = () => {
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading="News"
        og_image="https://img.freepik.com/free-psd/man-reading-news-breakfast-table_53876-57301.jpg?t=st=1711876018~exp=1711879618~hmac=06cc6040ef5799a1d28b7747effc948ef9d44270f4e85ea6b21d832051e7c863&w=996"
        og_type="article"
      />
      <NewsInfo />
    </Layout>
  );
};

export default NewsDetail;
