import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import NoticeList from "@/pageComponents/notice/NoticeList";
import Metatag from "@/utils/Metatag";

export default function Notices() {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="About" og_image="" />
      <CommonBanner
        headerName="Notices"
        imageLink="https://img.freepik.com/free-photo/doctor-with-face-mask-against-covid19-discussing-with-nurse-hospital-waiting-area-disabled-senior-woman-wheelchair-waiting-examination-assistant-working-reception-computer_482257-6055.jpg?t=st=1711518378~exp=1711521978~hmac=b0af5020e6c0b1d6f62c87e19faea6d819b221645a85cf1cec4102e1a552af8e&w=1380"
      />
      <NoticeList />
    </Layout>
  );
}
