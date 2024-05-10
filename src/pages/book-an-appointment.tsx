import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import BookAppointementDetail from "@/pageComponents/BookAppointment/components/BookAppointementDetail";
import Metatag from "@/utils/Metatag";

const BookAnAppointment = () => {
  return (
    <Layout>
      <Metatag
        heading="Nepal Medical College"
        subheading="Book an Appointment"
        og_image="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />
      <CommonBanner
        headerName="Book An Appointment"
        imageLink="/images/Banners/book-appointment.webp"
      />
      <BookAppointementDetail />
    </Layout>
  );
};

export default BookAnAppointment;
