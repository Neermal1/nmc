import BookAppointmentForm from "@/pageComponents/BookAppointment/components/BookAppointmentForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AppointmentDetail = () => {
  const router = useRouter();

  //states
  const [departmentName, setDepartmentName] = useState<string | any>("");
  const [doctorName, setDoctorName] = useState<string | any>("");

  useEffect(() => {
    if (router.isReady) {
      const { department_name, doctor_name } = router.query;
      setDepartmentName(department_name);
      setDoctorName(doctor_name);
    }
  }, [router]);

  return (
    <div className="layout component-padding">
      <div className="">
        <BookAppointmentForm
          departSlug={departmentName && departmentName}
          doctorSlug={doctorName && doctorName}
        />
      </div>
    </div>
  );
};

export default AppointmentDetail;
