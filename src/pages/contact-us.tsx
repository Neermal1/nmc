import Layout from "@/components/Layout/Layout";
import ContactDetail from "@/pageComponents/Contact/components/ContactDetail";
import Metatag from "@/utils/Metatag";

const ContactUs = () => {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Contact Us" og_image="" />

      <ContactDetail />
    </Layout>
  );
};

export default ContactUs;
