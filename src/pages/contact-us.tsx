import Layout from "@/components/Layout/Layout";
import ContactDetail from "@/pageComponents/Contact/components/ContactDetail";
import Metatag from "@/utils/Metatag";

const ContactUs = () => {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Contact Us"
        og_image="https://bluerevolution.ifremer.fr/var/storage/images/_aliases/opengraphimage/medias-ifremer/medias-bluerevolution/contact-us/1811720-1-eng-GB/Contact-us.png"
      />

      <ContactDetail />
    </Layout>
  );
};

export default ContactUs;
