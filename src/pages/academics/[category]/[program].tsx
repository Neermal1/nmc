/* eslint-disable react-hooks/exhaustive-deps */
import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import ProgramContent from "@/pageComponents/academics/ProgramDetails";
import Metatag from "@/utils/Metatag";

export default function ProgramDetail() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Academics" />
      <CommonBanner
        headerName="Academics"
        imageLink="https://img.freepik.com/premium-photo/sitting-by-table-group-young-doctors-is-working-together-modern-office_146671-58529.jpg?w=996"
      />
      <ProgramContent />
    </Layout>
  );
}
