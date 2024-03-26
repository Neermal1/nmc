import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoIosTimer } from "react-icons/io";
import { MdEmail } from "react-icons/md";

//hooks
import useFetchData from "@/hooks/useFetchData";

const CallToAction = () => {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div
        style={{
          backgroundImage: `url("./images/callToAction/callBanner.png")`,
        }}
        className="relative w-full overflow-y-hidden lg:bg-no-repeat  bg-cover"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full    bg-[#101A55] opacity-70"></div>

        <div className="layout component-padding relative flex flex-col gap-[16px]">
          <div className="flex  flex-col items-center justify-center">
            <div className="text-white">Get in Touch</div>
            <div
              className="lg:text-[36px]  text-[28px] font-bold"
              style={{
                color: "var(--accent-main-color)",
              }}
            >
              Contact Us
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            <div className="bg-white p-8 rounded-[8px] flex flex-col gap-4">
              <div>
                <div
                  className=""
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  <FaPhoneAlt size={30} />
                </div>
                <div
                  className="text-[20px] font-semibold mt-4"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Emergency
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <a href={`tel:${fetchedData?.company_phone}`}>
                  {fetchedData?.company_phone}
                </a>
                <br />
                <a href={`tel:${fetchedData?.company_phone2}`}>
                  {fetchedData?.company_phone2}
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[8px] flex flex-col gap-4">
              <div>
                <div
                  className=""
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  <GrLocation size={30} />
                </div>
                <div
                  className="text-[20px] font-semibold mt-4"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Location
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div>{fetchedData?.company_address}</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[8px] flex flex-col gap-4">
              <div>
                <div
                  className=""
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  <MdEmail size={30} />
                </div>
                <div
                  className="text-[20px] font-semibold mt-4"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Email
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <a href={`mailto:${fetchedData?.company_email}`}>
                  {fetchedData?.company_email}
                </a>
                <br />
                <a href={`mailto:${fetchedData?.company_email2}`}>
                  {fetchedData?.company_email2}
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[8px] flex flex-col gap-4">
              <div>
                <div
                  className=""
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  <IoIosTimer size={30} />
                </div>
                <div
                  className="text-[20px] font-semibold mt-4"
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Working Hours
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div>{fetchedData?.working_hour}</div>
                <div>{fetchedData?.working_hour2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default CallToAction;
