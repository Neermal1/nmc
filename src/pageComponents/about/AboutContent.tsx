import { useState, useRef, useEffect } from "react";
import { FaRegHospital } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import AboutHospital from "./AboutHospital";
import MsgFromDirect from "./MsgFromDirect";
import MissionVission from "./MissionVission";
import MgmtTeam from "./MgmtTeam";
import useFetchData from "@/hooks/useFetchData";
import Metatag from "@/utils/Metatag";

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState(0);
  const { fetchedData } = useFetchData("company-profile");

  const tabs = [
    {
      label: "About hospital",
      icon: <FaRegHospital />,
      content: <AboutHospital />,
    },
    {
      label: "Messages from Team",
      icon: <IoMdMail />,
      content: <MsgFromDirect />,
    },
    {
      label: "Mission and vision",
      icon: <GoGoal />,
      content: <MissionVission />,
    },
    {
      label: "Management team",
      icon: <RiTeamLine />,
      content: <MgmtTeam />,
    },
  ];

  return (
    <>
      <Metatag
        heading={fetchedData?.meta_title || "Nepal Medical College"}
        subheading="About"
        description={fetchedData?.meta_description}
        og_image="/images/ogImage/homePage.png"
      />
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center justify-start lg:justify-between mb-4 border-b-2 border-secondary py-4 overflow-x-auto min-w-full no-scrollbar">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex items-center px-4 lg:px-6 py-2 lg:py-4 rounded cursor-pointer text-nowrap ${
                activeTab === index ? "bg-secondary" : "hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2 text-2xl lg:text-4xl">{tab.icon}</span>
              <span className="text-lg md:text-xl">{tab.label}</span>
            </div>
          ))}
        </div>
        <div className="p-2 lg:p-4">{tabs[activeTab].content}</div>
      </div>
    </>
  );
}
