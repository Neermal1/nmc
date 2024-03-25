//components
import Layout from "@/components/Layout/Layout";
import ClinicalService from "@/pageComponents/Home/components/ClinicalService";
import Facility from "@/pageComponents/Home/components/Facility";
import HealthCarePackages from "@/pageComponents/Home/components/HealthCarePackages";
import HeroSection from "@/pageComponents/Home/components/HeroSection";
import Metatag from "@/utils/Metatag";

const index = () => {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Home" og_image="" />
      <HeroSection />
      <Facility />
      <ClinicalService />
      <HealthCarePackages />
    </Layout>
  );
};

export default index;
