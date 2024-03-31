"use client";
import axiosInstance from "@/axiosInstance/axiosInstance";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
//components
import ServiceInfo from "@/pageComponents/ServiceDetail/components/ServiceInfo";
import Metatag from "@/utils/Metatag";

const ServiceDetail = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${
          data?.detail?.meta_title ? data?.detail?.meta_title : "NMC"
        }`}
        subheading={`${
          data?.detail?.meta_description
            ? data?.detail?.meta_description
            : "Hospital"
        }`}
        og_image={`${data?.detail?.image_link}`}
        description={`${data?.detail?.meta_description}`}
      />
      <ServiceInfo serviceInfo={data} />
    </Layout>
  );
};

export default ServiceDetail;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(`service/${params?.service_name}`);
    console.log(data);
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
          const { data } = await SSR_fetchData(
            `service/${params?.service_name}`
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
