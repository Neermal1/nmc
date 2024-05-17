import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import { SSR_fetchData } from "@/helperFunctions/fetchData.helper";
import MgmtTeam from "@/pageComponents/about/MgmtTeam";
import Metatag from "@/utils/Metatag";

const DynamicTeam = ({ data }: any) => {
  return (
    <div>
      <Layout>
        <Metatag
          heading={`${
            "Nepal Medical College"
              ? "Nepal Medical College"
              : "Nepal Medical College"
          }`}
          subheading={`${
            data?.category?.name ? data?.category?.name : "Hospital"
          }`}
          // og_image={`${data?.details?.image_link}`}
          description={`${data?.category?.name}`}
        />
        <CommonBanner
          headerName={data?.category?.name}
          imageLink="/images/Banners/management.webp"
        />
        <MgmtTeam fetchedData={data} />
      </Layout>
    </div>
  );
};

export default DynamicTeam;

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await SSR_fetchData(
      `${params?.dynamic_team}/team-member/list`
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
