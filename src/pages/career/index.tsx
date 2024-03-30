import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import CareerList from "@/pageComponents/career/CareerList";
import Metatag from "@/utils/Metatag";

export default function Career() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Career" og_image="" />
      <CommonBanner
        headerName="Career at NMC"
        imageLink="https://img.freepik.com/premium-photo/medical-workers-team-wearing-face-mask-while-standing-together-with-blurred-background-hospital_175634-20538.jpg?w=1380"
      />
      <CareerList />
    </Layout>
  );
}
