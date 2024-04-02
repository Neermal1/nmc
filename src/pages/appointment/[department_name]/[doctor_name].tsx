import CommonBanner from "@/components/Banner/CommonBanner";
import Layout from "@/components/Layout/Layout";
import AppointmentDetail from "@/pageComponents/appointment/components/AppointmentDetail";
import Metatag from "@/utils/Metatag";

const DoctorAppointment = () => {
  return (
    <Layout>
      <Metatag
        heading={`${"Nepal Medical College"}`}
        subheading={`${"Hospital"}`}
      />
      <CommonBanner
        headerName="Book An Appointment"
        imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />
      <AppointmentDetail />
    </Layout>
  );
};

export default DoctorAppointment;
