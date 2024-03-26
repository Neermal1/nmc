import useFetchData from "@/hook/useFetchData";
import { Tabs } from "antd";
import { FaRegHospital } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import {RiTeamLine} from 'react-icons/ri'
import MissionVission from "./MissionVission";
import MsgFromDirect from "./MsgFromDirect";
import MgmtTeam from "./MgmtTeam";

export default function AboutContent() {
  const { fetchedData } = useFetchData("company-profile");
  const tabs = [
    {
      label: "About hospital",
      icon: <FaRegHospital />,
      content: "Content for About hosital",
    },
    {
      label: "Message from director",
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
    <Tabs
      defaultActiveKey="2"
      centered
      className="custom-tabs px-8 md:px-16 lg:px-24 xl:px-32"
    >
      {tabs.map((tab, index) => (
        <Tabs.TabPane
          tab={
            <div className="flex items-center space-x-2 text-base lg:text-xl py-4 mx-8 font-medium">
              <span className="text-2xl lg:text-4xl"> {tab.icon}</span>
              <span> {tab.label}</span>
            </div>
          }
          key={String(index + 1)}
        >
          <div className="">{tab.content}</div>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}
