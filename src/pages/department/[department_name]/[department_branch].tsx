// "use client";
//axiosInstance
import axiosInstance from "@/axiosInstance/axiosInstance";

//components
import Layout from "@/components/Layout/Layout";
import DepartmentDetail from "@/pageComponents/Department/components/DepartmentDetail";

//Metatag
import Metatag from "@/utils/Metatag";

const DepartmentBranch = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${
          data?.department?.meta_title ? data?.department?.meta_title : "NMC"
        }`}
        subheading={`${
          data?.department?.meta_description
            ? data?.department?.meta_description
            : "Hospital"
        }`}
        og_image={`${data?.department?.image_link}`}
        description={`${data?.department?.meta_description}`}
      />
      <DepartmentDetail />
    </Layout>
  );
};

export default DepartmentBranch;

export async function getServerSideProps({ params }: any) {
  try {
    const res = await axiosInstance.get(
      `departments/${params.department_name}/${params.department_branch}/detail`
    );
    const data = await res.data;
    // console.log(data);
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
