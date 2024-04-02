//components
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import DepartmentHeadDetail from "@/pageComponents/DepartmentHead/components/DepartmentHeadDetail";
import Metatag from "@/utils/Metatag";

const DepartmentHead = ({ data }: any) => {
  return (
    <Layout>
      <Metatag
        heading={`${
          data?.details?.meta_title
            ? data?.details?.meta_title
            : "Nepal Medical College"
        }`}
        subheading={`${
          data?.details?.meta_description
            ? data?.details?.meta_description
            : "Hospital"
        }`}
        og_image={`${data?.details?.image_link}`}
        description={`${data?.details?.meta_description}`}
      />
      <DepartmentHeadDetail departmentHeadInfo={data} />
    </Layout>
  );
};

export default DepartmentHead;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(
      `departments/${params?.department_head}/details`
    );
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
            `departments/${params?.department_head}/details`
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
