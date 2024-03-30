//components
import Layout from "@/components/Layout/Layout";
import DoctorDetail from "@/pageComponents/DoctorDetail/components/DoctorDetail";

//axiosInstance
import axiosInstance from "@/axiosInstance/axiosInstance";

//metatag
import Metatag from "@/utils/Metatag";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";

const DoctorInfoDetail = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading={data?.name}
        og_image={data?.image_link}
      />
      <DoctorDetail doctorInfo={data} />
    </Layout>
  );
};

export default DoctorInfoDetail;

export async function getServerSideProps({ params }: any) {
  try {
    console.log(params);
    const { data } = await SSR_fetchData(
      `doctor/detail/${params?.doctor_info_detail}`
    );

    return {
      props: { data },
    };
  } catch (e: any) {
    if (e.response && e.response.status === 429) {
      const retryAfter = parseInt(e.response.headers["retry-after"]);
      console.log("This is retry after", retryAfter);
      if (!isNaN(retryAfter)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
        try {
          console.log("refetching");
          const { data } = await SSR_fetchData(
            `doctor/detail/${params?.doctor_info_detail}`
          );
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
