import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import AboutHospitalContent from "@/pageComponents/aboutpages/abouthospital/AboutHospitalContent";
import Metatag from "@/utils/Metatag";

export default function AboutHospital() {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading="About Hospital"
        description="A leading institution dedicated to educating healthcare professionals and advancing medical care in Nepal. Learn about our mission, history, and contributions to healthcare excellence."
        keywords="Nepal Medical College, NMC, healthcare professionals, medical care, mission, history, contributions, excellence"
        og_image="/images/ogImage/homePage.png"
      />
      <Layout>
        <CommonBanner
          headerName="About Hospital"
          imageLink="/images/Banners/Banner1.png"
        />
        <AboutHospitalContent />
      </Layout>
    </>
  );
}
