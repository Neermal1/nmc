import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import NmcSong from "@/pageComponents/aboutpages/nmcsong/NmcSong";
import Metatag from "@/utils/Metatag";

export default function NmcSongs() {
  return (
    <>
      <Metatag
        heading="Nepal Medical College"
        subheading="NMC Song"
        description="A leading institution dedicated to educating healthcare professionals and advancing medical care in Nepal. Learn about our mission, history, and contributions to healthcare excellence."
        keywords="Nepal Medical College, NMC, nmc song, healthcare professionals, medical care, mission, history, contributions, excellence"
        og_image="/images/ogImage/homePage.png"
      />
      <Layout>
        <CommonBanner
          headerName="NMC Song"
          imageLink="/images/Banners/song.jpg"
        />
        <NmcSong />
      </Layout>
    </>
  );
}
