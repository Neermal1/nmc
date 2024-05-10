import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import MissionVisionContent from "@/pageComponents/aboutpages/missionvision/MissionVissionContent";
import Metatag from "@/utils/Metatag";

export default function MissionVision() {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading="Mission & Vision"
        description="Explore the core values and aspirations of Nepal Medical College through our mission and vision. Discover how we aim to shape the future of healthcare through education, research, and service to the community."
        keywords="Nepal Medical College, mission, vision, core values, aspirations, healthcare, education, research, community"
        og_image="/images/ogImage/homePage.png"
      />
      <Layout>
        <CommonBanner
          headerName="Our Mission & Vision"
          imageLink="/images/Banners/mission.jpg"
        />
        <MissionVisionContent />
      </Layout>
    </>
  );
}
