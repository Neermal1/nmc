/* eslint-disable react-hooks/exhaustive-deps */
import CommonBanner from "@/components/Banner/CommonBanner";
import { useState } from "react";
import { FaBookOpen, FaBriefcase, FaUserGraduate } from "react-icons/fa";
import Professors from "./Professors";

export default function ProgramDetails({ data }: any) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Course Outline",
      icon: <FaBookOpen />,
      content: data?.course_outline,
    },
    {
      label: "Admission",
      icon: <FaUserGraduate />,
      content: data?.admission,
    },
    {
      label: "Career",
      icon: <FaBriefcase />,
      content: data?.career,
    },
    {
      label: "Professors",
      icon: <FaBriefcase />,
      content: <Professors professors={data?.doctors} />,
    },
  ];

  return (
    <>
      <CommonBanner
        headerName="Academics"
        imageLink="/images/Banners/academics-banner.jpg"
      />
      <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-24">
        <div>
          <h1 className="text-2xl lg:text-4xl text-primary pb-2">
            {data?.name}
          </h1>
          <div className="w-32 border-2 border-primaryYellow"></div>
          {data?.image_link && (
            <div className="my-4 lg:my-8">
              <img
                src={data?.image_link}
                alt=""
                className="w-full lg:h-96 object-center object-cover rounded-xl"
              />
            </div>
          )}
          <div>
            <p
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </div>

          <div className="mt-8">
            <div className="pb-4 flex items-center lg:justify-center lg:space-x-8 overflow-x-auto  no-scrollbar border-b border-gray-200">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`flex items-center px-4 lg:px-6 py-2 lg:py-4 rounded cursor-pointer text-nowrap ${
                    activeTab === index ? "bg-secondary" : "hover:bg-blue-50"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="mr-2 text-lg md:text-xl">{tab.icon}</span>
                  <span className="text-lg md:text-xl">{tab.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              {typeof tabs[activeTab].content === "string" ? (
                <p
                  className="leading-[30px]"
                  dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }}
                ></p>
              ) : (
                tabs[activeTab].content
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
