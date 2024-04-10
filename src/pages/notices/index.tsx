import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import NoticeList from "@/pageComponents/notice/NoticeList";
import Metatag from "@/utils/Metatag";

export default function Notices() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Notice"
        description="Stay informed about important announcements, updates, and notices relevant to students, faculty, and staff. Explore the latest notices regarding academic schedules, events, administrative announcements, and more. At NMC, we strive to keep our community well-informed and engaged, ensuring a smooth and enriching educational experience for all."
        og_image="/images/ogImage/homePage.png"
      />
      <CommonBanner
        headerName="Notice"
        imageLink="/images/Banners/Banner2.png"
      />
      <NoticeList />
    </Layout>
  );
}
