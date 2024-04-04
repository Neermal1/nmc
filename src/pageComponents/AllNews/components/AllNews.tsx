import { useRouter } from "next/router";
import Link from "next/link";

//components
import CommonBanner from "@/components/Banner/CommonBanner";

//interface
import { INews } from "@/interface/interface";

//react paginate
import ReactPaginate from "react-paginate";

const AllNews = ({ activePage = 1, totalPages, totalPosts }: any) => {
  const router = useRouter();

  return (
    <div className="">
      <CommonBanner
        headerName="News"
        imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />

      <div className="">
        <div className="layout component-padding">
          <div className="flex flex-col gap-10">
            <div className="grid lg:grid-cols-4 gap-10">
              {totalPosts?.length > 0 &&
                totalPosts?.map((data: INews, index: number) => {
                  return (
                    <Link
                      href={`/news/${data.slug}`}
                      key={index}
                      className="flex flex-col gap-5"
                    >
                      <div className="overflow-hidden rounded-[8px]">
                        <img
                          src={data?.image_link}
                          alt=""
                          className="lg:h-[200px] rounded-[8px] object-cover hover:scale-110 transition-all duration-700"
                        />
                      </div>
                      <div className="text-[20px] font-semibold line-clamp-2 text-color">
                        {data?.title}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="m-8">
          <ReactPaginate
            className="flex gap-2 items-center justify-end mt-12"
            breakLabel="..."
            nextLabel="Next 🠖"
            onPageChange={({ selected }) => {
              console.log("Active Page", activePage);
              console.log("Selected Page", selected + 1);
              console.log(
                "If active page and selected page are same then it is first page"
              );
              if (activePage !== selected + 1) {
                router.push(`/news/page/${selected + 1}`);
              }
            }}
            pageRangeDisplayed={5}
            initialPage={activePage - 1}
            pageCount={totalPages}
            previousLabel="🠔 Previous"
            renderOnZeroPageCount={null}
            activeClassName="bg-primary px-4 py-1 text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AllNews;
