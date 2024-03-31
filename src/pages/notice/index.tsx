import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import NoticeList from "@/pageComponents/notice/NoticeList";
import Metatag from "@/utils/Metatag";

export default function Notices() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Notice" og_image="/images/ogImage/homePage.png" />
      <CommonBanner
        headerName="Notice"
        imageLink="/images/Banners/Banner2.png"
      />
      <NoticeList />
    </Layout>
  );
}
