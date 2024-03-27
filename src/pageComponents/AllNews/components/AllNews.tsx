import useFetchData from "@/hooks/useFetchData";
import { INews } from "@/interface/interface";
import Metatag from "@/utils/Metatag";
import Link from "next/link";

const AllNews = () => {
  const { fetchedData, loading } = useFetchData("news/list");

  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div className="black-color">
        <Metatag heading="NMC " subheading="All News" />
        <div className="">
          <div className="layout component-padding">
            <div className="flex flex-col gap-10">
              <div className=" w-fit text-color lg:text-[35px] text-[25px] font-semibold  ">
                All Latest News
              </div>
              <div className="grid lg:grid-cols-4 gap-10">
                {fetchedData?.map((data: INews, index: number) => {
                  return (
                    <Link
                      href={`/news/${data.slug}`}
                      key={index}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <img
                          src={data?.image_link}
                          alt=""
                          className="h-[200px] object-cover"
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
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default AllNews;
