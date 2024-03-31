import Link from "next/link";

//react icons
import { IoBookSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import { RiFirstAidKitLine } from "react-icons/ri";
import { CiStethoscope } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";

//components
import ComponentHeader from "@/components/componentHeader/ComponentHeader";

//images
import collegestudent from "../../../../public/images/random/collegestudent.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

const OurAcademics = () => {
  const academicList = [
    {
      title: "Academic programs",
      icon: <IoBookSharp size={70} />,
      slug: "all-department",
    },
    {
      title: "Faculty",
      icon: <FaUserGraduate size={70} />,
      slug: "/all-department",
    },
    {
      title: "Student Zone",
      icon: <FiUsers size={70} />,
      slug: "/about",
    },
    {
      title: "Notice",
      icon: <FaNewspaper size={70} />,
      slug: "/notice",
    },
    {
      title: "Facilities & Services",
      icon: <RiFirstAidKitLine size={70} />,
      slug: "/facilities",
    },
    {
      title: "Life At NMC",
      icon: <CiStethoscope size={70} />,
      slug: "/about",
    },
  ];

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-12 lg:gap-20 gap-10">
        <div className="flex flex-col lg:col-span-7 gap-10">
          <ComponentHeader
            data={{
              main_title: "OUR ACADEMICS",
            }}
          />
          <div className="flex flex-col gap-10 ">
            <div className="grid lg:grid-cols-3 gap-6 ">
              {academicList?.map((data, index) => {
                return (
                  <Link
                    href={data?.slug}
                    key={index}
                    className="border-[1px] group hover:bg-[#1F2B6C] gap-6 p-4 rounded-[8px]  flex flex-col items-center justify-center border-[#1e1e1e]"
                  >
                    <div className="flex  flex-col gap-4 items-center justify-center">
                      <div className="text-[#1F2B6C] group-hover:text-[#FFDD1C]">
                        {data?.icon}
                      </div>
                      <div className="text-center font-medium group-hover:text-[#FFDD1C]">
                        {data?.title}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center justify-around text-white bg-[#1F2B6C] py-4 rounded-[8px]">
              <div>For International Students :</div>
              <div>
                <a href="tel:01-4911008" className="flex items-center gap-2">
                  <span>
                    <BsFillTelephoneFill />
                  </span>

                  <span
                    style={{
                      color: "var(--accent-main-color)",
                    }}
                  >
                    01-4911008
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end lg:col-span-5 ">
          <div className="overflow-hidden rounded-[8px]">
            <div className="relative hover:scale-110 transition-all duration-700   hover:cursor-pointer">
              <div className="">
                <Image
                  src={collegestudent}
                  alt=""
                  className="object-cover h-[100%]  "
                />
              </div>
              <div className="absolute flex items-center justify-center rounded-b-[8px] bottom-0 h-[350px] bg-gradient-to-t from-[#101A55]  w-full">
                <div className="flex flex-col gap-8">
                  <div className="lg:text-[46px] font-bold text-[white]">
                    OUR{" "}
                    <span
                      style={{
                        color: "var(--accent-main-color)",
                      }}
                      className="font-bold"
                    >
                      JOURNALS
                    </span>
                  </div>
                  <div>
                    <Button
                      data={{
                        name: "DOWNLOADS",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAcademics;
