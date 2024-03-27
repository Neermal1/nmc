import { useState } from "react";
import { BiCalendarEdit } from "react-icons/bi"; // Assuming this is the icon you want to use for the date
import { AiFillEye, AiOutlineCloseCircle } from "react-icons/ai"; // Assuming these are the icons you want to use
import NoticeCard from "./NoticeCard";

const noticesData = [
  {
    id: 1,
    category: "General",
    date: "February 26, 2024",
    name: "NMC Examination Form",
    image:
      "https://nmc.org.np/photos/4/Special%20Examination%20Notice.%20copy.jpg",
  },
  {
    id: 2,
    category: "Events",
    date: "February 26, 2024",
    name: "Examination",
    image:
      "https://www.collegenp.com/uploads/2021/02/Nepal-Medical-Council-(NMC)-Special-Examination-Online-Application-Submission-Notice.png",
  },
];

export default function NoticeList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices =
    selectedCategory === "All"
      ? noticesData
      : noticesData.filter((notice) => notice.category === selectedCategory);

  return (
    <section className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="flex space-x-4 lg:flex-col lg:w-1/4 lg:space-x-0 h-full border p-4 rounded-xl">
        <button
          className={`mb-4 px-4 py-2 rounded-md focus:outline-none focus:border-none text-sm md:text-base lg:text-lg font-medium ${
            selectedCategory === "All"
              ? "bg-primary text-white"
              : "bg-blue-50 text-black"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {noticesData.map((notice, index) => (
          <button
            key={index}
            className={`mb-4 px-4 py-2 rounded-md focus:outline-none focus:border-none text-sm md:text-base lg:text-lg font-medium ${
              selectedCategory === notice.category
                ? "bg-primary text-white"
                : "bg-blue-50 text-black"
            }`}
            onClick={() => setSelectedCategory(notice.category)}
          >
            {notice.category}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col gap-6">
        {filteredNotices.map((notice, index) => (
          <NoticeCard key={index} notice={notice} />
        ))}
      </div>
    </section>
  );
}
