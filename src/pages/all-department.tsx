import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import DepartmentList from "@/pageComponents/all-department/departmentList";
import Metatag from "@/utils/Metatag";

export default function Department() {
  return (
    <Layout>
      <Metatag
        heading="NMC"
        subheading="Departments"
        og_image=""
        description=""
      />
      <CommonBanner
        headerName="Departments"
        imageLink="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84791.jpg?t=st=1711692780~exp=1711696380~hmac=013ee7f057be0678ddb08e918cb965f2ed72b7cc85e5dfe28cd427f87f3431ac&w=996"
      />
      <DepartmentList />
    </Layout>
  );
}
