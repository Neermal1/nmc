import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import NmcPromoters from "@/pageComponents/aboutpages/nmcpromoters/NmcPromoters";
import Metatag from "@/utils/Metatag";

export default function NmcPromoter() {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading="NMC Promoters"
        description="A leading institution dedicated to educating healthcare professionals and advancing medical care in Nepal. Learn about our mission, history, and contributions to healthcare excellence."
        keywords="Nepal Medical College, NMC, nmc promoters, healthcare professionals, medical care, mission, history, contributions, excellence"
        og_image="/images/ogImage/homePage.png"
      />
      <Layout>
        <CommonBanner
          headerName="NMC Promoters"
          imageLink="/images/Banners/promoters.avif"
        />
        <NmcPromoters />
      </Layout>
    </>
  );
}
