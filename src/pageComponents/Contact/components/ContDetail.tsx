import useFetchData from "@/hooks/useFetchData";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation, GrMail } from "react-icons/gr";
import ContactForm from "./ContactForm";

export default function ContDetail() {
  const { fetchedData, loading } = useFetchData("company-profile");

  return (
    <section className="component-padding layout">
      <div className="grid lg:grid-cols-8 gap-8 ">
        <div className="lg:col-span-5">
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
            <div className="flex flex-col gap-2 mt-4">
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
              <div className="flex items-center gap-2">
                <div
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  <GrMail size={15} />
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    <div>{fetchedData?.company_email}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* for map  */}
            <div className="mt-4 lg:mt-8 overflow-hidden">
              <div
                className="w-80 h-80 md::w-full"
                dangerouslySetInnerHTML={{ __html: fetchedData?.map }}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 lg:flex lg:justify-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
