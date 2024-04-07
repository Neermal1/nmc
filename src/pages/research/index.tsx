import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import ResearchList from "@/pageComponents/research/ResearchList";
import Metatag from "@/utils/Metatag";

export default function Research() {
  return (
    <Layout>
      <Metatag heading="Nepal Medical College" subheading="Research" description="Discover cutting-edge medical research at Nepal Medical College, where our experts are driving innovation in healthcare. Explore our latest studies and collaborations shaping the future of medicine." og_image="https://futurehealthcaretoday.com/wp-content/uploads/2021/01/shutterstock_691541095-scaled.jpg" />
      <CommonBanner
        headerName="NMC Research"
        imageLink="/images/Banners/ResearchBanner.png"
      />
      <ResearchList />
    </Layout>
  );
}
