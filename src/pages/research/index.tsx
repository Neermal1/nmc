import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import ResearchList from "@/pageComponents/research/ResearchList";
import Metatag from "@/utils/Metatag";

export default function Research() {
  return (
    <Layout>
      <Metatag heading="Nepal Medical College" subheading="Research" description="" og_image="https://futurehealthcaretoday.com/wp-content/uploads/2021/01/shutterstock_691541095-scaled.jpg" />
      <CommonBanner
        headerName="NMC Research"
        imageLink="/images/Banners/Researchbanner.png"
      />
      <ResearchList />
    </Layout>
  );
}
