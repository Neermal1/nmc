import Layout from "@/components/Layout/Layout";
import ContactDetail from "@/pageComponents/Contact/components/ContactDetail";
import Metatag from "@/utils/Metatag";

const ContactUs = () => {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Contact Us"
        og_image="https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY="
      />

      <ContactDetail />
    </Layout>
  );
};

export default ContactUs;
