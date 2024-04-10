import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import MgmtTeam from "@/pageComponents/aboutpages/managementteam/MgmtTeam";
import Metatag from "@/utils/Metatag";

export default function ManagementTeam() {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading="Management Team"
        description="Meet the dedicated leadership behind Nepal Medical College. Learn about our experienced management team driving innovation and excellence in medical education and healthcare."
        keywords="Nepal Medical College, management team, leadership, innovation, excellence, medical education, healthcare"
        og_image="/images/ogImage/homePage.png"
      />
      <Layout>
        <CommonBanner
          headerName="Management Team"
          imageLink="/images/Banners/Banner1.png"
        />
        <MgmtTeam />
      </Layout>
    </>
  );
}
