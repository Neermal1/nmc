import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import AboutContent from "@/pageComponents/about/AboutContent";
import Metatag from "@/utils/Metatag";

export default function About() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="About" og_image="/images/ogImage/homePage.png" />
      <CommonBanner
        headerName="About us"
        imageLink="/images/Banners/Banner1.png"
      />
      <AboutContent />
    </Layout>
  );
}
