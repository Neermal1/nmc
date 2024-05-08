import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import DepartmentList from "@/pageComponents/all-department/departmentList";
import Metatag from "@/utils/Metatag";

export default function Department() {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Department"
        og_image="/images/ogImage/homePage.png"
        description=""
      />
      <CommonBanner
        headerName="Departments"
        imageLink="/images/Banners/Banner2.png"
      />
      <DepartmentList />
    </Layout>
  );
}
