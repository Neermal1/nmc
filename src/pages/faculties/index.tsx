// index.tsx
import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import FacultiesContent from "@/pageComponents/faculties/FacultiesContent";
import Metatag from "@/utils/Metatag";
import axiosInstance from "@/axiosInstance/axiosInstance";

export default function Faculties({ academics }: any) {
  return (
    <>
      <Metatag heading="Nepal Medical College" subheading="Faculties" />
      <Layout>
        <CommonBanner
          headerName="Faculties"
          imageLink="/images/Banners/Banner1.png"
        />
        <FacultiesContent academics={academics} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axiosInstance.get("academics/list");
    const academics = response.data;
    return {
      props: {
        academics,
      },
    };
  } catch (error) {
    console.error("Error fetching academic data:", error);
    return {
      props: {
        academics: [],
      },
    };
  }
}
