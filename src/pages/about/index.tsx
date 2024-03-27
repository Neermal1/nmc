import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import AboutContent from "@/pageComponents/about/AboutContent";
import Metatag from "@/utils/Metatag";

export default function About() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="About" og_image="" />
      <CommonBanner
        headerName="About us"
        imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />
      <AboutContent />
    </Layout>
  );
}
