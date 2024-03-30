"use client";
import axiosInstance from "@/axiosInstance/axiosInstance";
import Layout from "@/components/Layout/Layout";
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
      <ServiceInfo />
    </Layout>
  );
};

export default ServiceDetail;

export async function getServerSideProps({ params }: any) {
  try {
    const res = await axiosInstance.get(`service/${params?.service_name}`);
    const data = await res?.data;

    // console.log("This is", params);
    return {
      props: { data },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        data: null,
      },
    };
  }
}
