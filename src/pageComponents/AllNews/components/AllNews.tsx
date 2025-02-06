import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

//components
import CommonBanner from "@/components/Banner/CommonBanner";

//interface
import { INews } from "@/interface/interface";

//react paginate
import ReactPaginate from "react-paginate";

const AllNews = ({ activePage = 1, totalPages = 1, totalPosts = [] }: any) => {
  const router = useRouter();

  return (
    <div>
      <CommonBanner headerName="News" imageLink="/images/Banners/news.jpg" />

      <div className="layout component-padding">
        <div className="flex flex-col gap-10">
          {totalPosts.length > 0 ? (
            <div className="grid lg:grid-cols-4 gap-10">
              {totalPosts.map((data: INews, index: number) => (
                <Link
                  href={`/news/${data.slug}`}
                  key={index}
                  className="flex flex-col gap-5"
                >
                  <div className="overflow-hidden rounded-[8px]">
                    <Image
                      src={data?.image_link || "/default-image.jpg"} // Fallback image
                      alt={data?.title || "News Image"}
                      width={300}
                      height={200}
                      className="lg:h-[200px] rounded-[8px] object-cover hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="text-[20px] font-semibold line-clamp-2 text-color">
                    {data?.title || "Untitled News"}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg">
              No news articles found.
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="m-8">
          <ReactPaginate
            className="pagination flex gap-2 items-center justify-end mt-12"
            breakLabel="..."
            nextLabel="Next 🠖"
            onPageChange={({ selected }) => {
              const newPage = selected + 1;
              if (activePage !== newPage) {
                router.push(`/news/page/${newPage}`);
              }
            }}
            pageRangeDisplayed={5}
            initialPage={activePage - 1}
            pageCount={totalPages}
            previousLabel="🠔 Previous"
            activeClassName="bg-primary px-4 py-1 text-white rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default AllNews;
