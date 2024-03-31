/* eslint-disable react-hooks/exhaustive-deps */
import useFetchData from "@/hooks/useFetchData";
import { ProgramDetail } from "@/interface/interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBookOpen, FaBriefcase, FaUserGraduate } from "react-icons/fa";
import Professors from "./Professors";
import Metatag from "@/utils/Metatag";
import CommonBanner from "@/components/Banner/CommonBanner";

export default function ProgramContent() {
  const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();
  const { program } = router.query;

  const { fetchedData, refetchData } = useFetchData(
    `academics/detail/${program}`
  );

  useEffect(() => {
    if (program) {
      refetchData();
    }
  }, [program]);

  const fetchedProgram: ProgramDetail = fetchedData;

  const tabs = [
    {
      label: "Course Outline",
      icon: <FaBookOpen />,
      content: fetchedProgram?.course_outline,
    },
    {
      label: "Admission",
      icon: <FaUserGraduate />,
      content: fetchedProgram?.admission,
    },
    {
      label: "Career",
      icon: <FaBriefcase />,
      content: fetchedProgram?.career,
    },
    {
      label: "Professors",
      icon: <FaBriefcase />,
      content: <Professors professors={fetchedProgram?.doctors} />,
    },
  ];

  return (
    <>
      <Metatag
        heading="NMC"
        subheading={fetchedProgram?.name || "Academics"}
        description={fetchedProgram?.meta_description}
        og_image={fetchedProgram?.image_link}
      />
      <CommonBanner
        headerName="Academics"
        imageLink="/images/Banners/Banner1.png"
      />
      <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
        <div>
          <h1 className="text-2xl lg:text-4xl text-primary pb-2">
            {fetchedProgram?.name}
          </h1>
          <div className="w-32 border-2 border-primaryYellow"></div>
          {fetchedProgram?.image_link && (
            <div className="my-4">
              <img
                src={fetchedProgram?.image_link}
                alt=""
                className="w-full md:h-80 object-center object-cover rounded-xl"
              />
            </div>
          )}
          <div>
            <p
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: fetchedProgram?.description }}
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
