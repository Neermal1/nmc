//components
import useFetchData from "@/hooks/useFetchData";
import ContactForm from "./ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Loader from "@/components/Loader/Loader";

const ContactDetail = () => {
  //states
  const { fetchedData, loading } = useFetchData("company-profile");
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else if (fetchedData) {
    return (
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
          <div className="col-span-3 flex flex-col gap-6">
            <div className="sticky top-[120px]">
              <div className="flex flex-col gap-4 ">
                <div
                  className="text-[20px]  font-semibold"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Want to reach us Directly?
                </div>
                <div>If you have any queries feel free to contact us.</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    <FaPhoneAlt size={15} />
                  </div>
                  <a href={`tel:${fetchedData?.company_phone}`}>
                    {fetchedData?.company_phone}
                  </a>

                  <a href={`tel:${fetchedData?.company_phone2}`}>
                    {fetchedData?.company_phone2}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    <GrLocation size={15} />
                  </div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <div>{fetchedData?.company_address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default ContactDetail;
