//components
import axiosInstance from "@/axiosInstance/axiosInstance";
import Layout from "@/components/Layout/Layout";
import DepartmentHeadDetail from "@/pageComponents/DepartmentHead/components/DepartmentHeadDetail";
import Metatag from "@/utils/Metatag";

const DepartmentHead = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${
          data?.details?.meta_title ? data?.details?.meta_title : "NMC"
        }`}
        subheading={`${
          data?.details?.meta_description
            ? data?.details?.meta_description
            : "Hospital"
        }`}
        og_image={`${data?.details?.image_link}`}
        description={`${data?.details?.meta_description}`}
      />
      <DepartmentHeadDetail />
    </Layout>
  );
};

export default DepartmentHead;

export async function getServerSideProps({ params }: any) {
  try {
    const res = await axiosInstance.get(
      `departments/${params.department_head}/details`
    );
    const data = await res.data;
    console.log(data);
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
