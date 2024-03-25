import Link from "next/link";
//react icons
import { FaHospitalAlt, FaUniversity } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";

const Facility = () => {
  const facilityList = [
    {
      icons: <FaHospitalAlt size={45} />,
      name: "Book An Appointment",
      slug: "#",
    },
    {
      icons: <RiFirstAidKitFill size={45} />,
      name: "View Health Record",
      slug: "#",
    },
    {
      icons: <MdHealthAndSafety size={45} />,
      name: "Our Services",
      slug: "#",
    },
    {
      icons: <FaUniversity size={45} />,
      name: "NMC Academics",
      slug: "#",
    },
  ];

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        {facilityList?.map((data, index) => {
          return (
            <Link href={data?.slug} key={index} className=" group  ">
              <div className="flex bg-[#BFD2F8] group-hover:bg-[#1F2B6C] rounded-[8px]  p-6 justify-center items-center gap-6">
                <div className="text-[#249CDE] group-hover:text-[#FFDD1C]">
                  {data?.icons}
                </div>
                <div className="text-[16px] font-medium group-hover:text-[#FFDD1C]">
                  {data?.name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Facility;
