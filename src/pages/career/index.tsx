import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import CareerList from "@/pageComponents/career/CareerList";
import Metatag from "@/utils/Metatag";

export default function Career() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Career"
        og_image="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/08/17064425/Portfolio-Career-1024x512.png"
      />
      <CommonBanner
        headerName="Career at NMC"
        imageLink="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/08/17064425/Portfolio-Career-1024x512.png"
      />
      <CareerList />
    </Layout>
  );
}
