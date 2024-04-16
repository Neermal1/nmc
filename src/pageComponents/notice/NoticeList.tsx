import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import useFetchData from "@/hooks/useFetchData";
import { INotice, INoticeCategory } from "@/interface/interface";
import NoticeCard from "./NoticeCard";
import Loader from "@/components/Loader/Loader";
import axiosInstance from "@/axiosInstance/axiosInstance";

export default function NoticeList() {
  const router = useRouter();
  const { fetchedData: categories, loading } =
    useFetchData("notices/categories");
  const [selectedCategory, setSelectedCategory] = useState<any>("all");
  const [activePage, setActivePage] = useState<number>(1);
  const noticesPerPage = 10;
  const [filteredNotices, setFilteredNotices] = useState<INotice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get(
          `notice/category/${selectedCategory}`
        );
        setFilteredNotices(response.data);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    };

    fetchNotices();
  }, [selectedCategory]);

  const totalNotices = filteredNotices?.length;
  const totalPages = Math.ceil(totalNotices / noticesPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const nextPage = selected + 1;
    setActivePage(nextPage);
    router.push(`/notices/page/${nextPage}`);
  };

  const startIdx = (activePage - 1) * noticesPerPage;
  const endIdx = Math.min(startIdx + noticesPerPage, totalNotices);
  const noticesToShow = filteredNotices?.slice(startIdx, endIdx);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full h-full px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="relative lg:w-1/4">
          <div className="flex space-x-4 lg:flex-col lg:space-x-0 border p-4 rounded-xl sticky top-32">
            <button
              className={`mb-4 px-4 py-2 rounded-md focus:outline-none focus:border-none text-sm md:text-base font-medium ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-blue-50 text-black"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            {categories?.map((category: INoticeCategory, index: number) => (
              <button
                key={index}
                className={`mb-4 px-4 py-2 rounded-md focus:outline-none focus:border-none text-sm md:text-base font-medium ${
                  selectedCategory === category?.slug
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-black"
                }`}
                onClick={() => setSelectedCategory(category?.slug)}
              >
                {category?.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-6">
          {noticesToShow?.map((notice: INotice, index: number) => (
            <NoticeCard key={index} notice={notice} />
          ))}
        </div>
      </div>
      <div className="m-8">
        <ReactPaginate
          className="pagination flex gap-2 items-center justify-end mt-12"
          breakLabel="..."
          nextLabel="Next 🠖"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          initialPage={activePage - 1}
          pageCount={totalPages}
          previousLabel="🠔 Previous"
          renderOnZeroPageCount={null}
          activeClassName="bg-primary px-4 py-1 text-white rounded-lg"
        />
      </div>
    </section>
  );
}
