// "use client";

//components
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
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
      <DepartmentDetail departmentInfo={data} />
    </Layout>
  );
};

export default DepartmentBranch;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(
      `departments/${params?.department_name}/${params?.department_branch}/detail`
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
            `departments/${params.department_name}/${params.department_branch}/detail`
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
