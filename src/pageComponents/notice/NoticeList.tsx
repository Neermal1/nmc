import { useState } from "react";
import { BiCalendarEdit } from "react-icons/bi";
import { AiFillEye, AiOutlineCloseCircle } from "react-icons/ai";
import NoticeCard from "./NoticeCard";
import useFetchData from "@/hooks/useFetchData";
import { INotice, INoticeCategory } from "@/interface/interface";

export default function NoticeList() {
  const { fetchedData: notices } = useFetchData("notices");
  const { fetchedData: categories } = useFetchData(
    "notices/categories"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredNotices =
    selectedCategory === "All"
      ? notices
      : notices?.filter(
          (notice: INotice) => notice.notice_category_id === selectedCategory
        );

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
        {categories?.map((category: INoticeCategory, index: number) => (
          <button
            key={index}
            className={`mb-4 px-4 py-2 rounded-md focus:outline-none focus:border-none text-sm md:text-base lg:text-lg font-medium ${
              selectedCategory === category.id.toString()
                ? "bg-primary text-white"
                : "bg-blue-50 text-black"
            }`}
            onClick={() => setSelectedCategory(category.id.toString())}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col gap-6">
        {filteredNotices?.map((notice: INotice, index: number) => (
          <NoticeCard key={index} notice={notice} />
        ))}
      </div>
    </section>
  );
}
