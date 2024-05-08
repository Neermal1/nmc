//components
import Layout from "@/components/Layout/Layout";
import CallToAction from "@/components/callToAction/CallToAction";
import ClinicalService from "@/pageComponents/Home/components/ClinicalService";
import Facility from "@/pageComponents/Home/components/Facility";
import HealthCarePackages from "@/pageComponents/Home/components/HealthCarePackages";
import HeroSection from "@/pageComponents/Home/components/HeroSection";
import News from "@/pageComponents/Home/components/News";
import OurAcademics from "@/pageComponents/Home/components/OurAcademics";
import WhyChooseUs from "@/pageComponents/Home/components/WhyChooseUs";
import Testimonials from "@/pageComponents/testimonials/Testimonials";

//metatag
import Metatag from "@/utils/Metatag";

//data fetcher
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import MsgFromDirect from "@/pageComponents/Home/components/MsgFromDirect";
import Advertisement from "@/components/Advertisement/Advertisement";

const index = ({ data }: any, { notice }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${data?.meta_title}`}
        subheading="Home"
        og_image={`${data?.logo_link}`}
        description={`${data?.meta_description}`}
      />
      <Advertisement />

      <HeroSection />
      <Facility />
      <ClinicalService />
      <HealthCarePackages />
      <WhyChooseUs />
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 md:py-16 bg-[#EAF1FF]">
        <MsgFromDirect />
      </div>
      <OurAcademics />
      <Testimonials />
      <CallToAction />
      <News />
    </Layout>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const { data } = await SSR_fetchData("company-profile");

    return {
      props: {
        data,
      },
    };
  } catch (e: any) {
    if (e.response && e.response.status === 429) {
      const retryAfter = parseInt(e.response.headers["retry-after"]);
      console.log("This is retry after", retryAfter);
      if (!isNaN(retryAfter)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        try {
          console.log("refetching");
          const { data } = await SSR_fetchData(`company-profile`);
          return {
            props: {
              data,
            },
          };
        } catch (retryError) {
          console.error("Retry failed:", retryError);
        }
      }

      return {
        props: {
          data: null,
        },
      };
    } else {
      return {
        props: {
          data: null,
        },
      };
    }
  }
}
