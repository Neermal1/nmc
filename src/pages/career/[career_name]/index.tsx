import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import JobDetail from "@/pageComponents/career/Details";
import Metatag from "@/utils/Metatag";
import { useRouter } from "next/router";

export default function CareerDetail() {
  const router = useRouter();
  const { career_name } = router.query;
  return (
    <Layout>
      <JobDetail />
    </Layout>
  );
}
