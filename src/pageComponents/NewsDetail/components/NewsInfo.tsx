import Link from "next/link";

//interface
import { INews } from "@/interface/interface";

//react icons
import { CiClock2 } from "react-icons/ci";

const NewsInfo = ({ newsInfo }: any) => {
  return (
    <div className="black-color mt-20">
      <div className="">
        <div className="layout px-4 pb-20">
          <div className="flex flex-col lg:gap-20 gap-10">
            <div className="flex flex-col lg:gap-20 gap-10">
              <div className="flex flex-col gap-4 ">
                <div className="lg:text-[35px] text-[25px]  font-semibold">
                  {newsInfo?.detail.title}
                </div>
                <div className="text-color font-medium text-[16px]">
                  <div className="flex gap-2 items-center">
                    <div className="ml-[4px]">
                      <CiClock2 size={20} />
                    </div>
                    <div>
                      {new Date(
                        newsInfo?.detail?.created_at
                      ).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-16 lg:gap-10">
                <div className="flex ">
                  <img
                    src={newsInfo?.detail.image_link}
                    alt=""
                    className="h-[65vh] lg:w-[100%] rounded-[8px] object-cover"
                  />
                </div>

                <div
                  className="leading-[26px]"
                  dangerouslySetInnerHTML={{
                    __html: newsInfo?.detail.description,
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-16">
                <div className="lg:text-[35px] text-[25px] font-semibold">
                  Related News
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-20 lg:gap-10">
                  {newsInfo?.related.map((data: INews, index: any) => {
                    return (
                      <Link href={`/news/${data?.slug}`} key={index}>
                        <div className="flex flex-col gap-5">
                          <div>
                            <img
                              src={data?.image_link}
                              alt=""
                              className="lg:h-[200px] object-cover rounded-[8px]"
                            />
                          </div>
                          <div className="text-[20px] font-semibold line-clamp-2 text-color">
                            {data?.title}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
