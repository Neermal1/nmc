import useFetchData from "@/hooks/useFetchData";
import { INews } from "@/interface/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";

const NewsInfo = () => {
  const router = useRouter();
  const [news_name, set_news_name] = useState<any>();

  useEffect(() => {
    if (router.isReady) {
      const { news_name } = router.query;
      console.log(news_name);
      set_news_name(news_name);
    }
  }, [router]);

  const { fetchedData, loading, refetchData } = useFetchData(
    `news/detail/${news_name}`
  );

  useEffect(() => {
    refetchData();
  }, [news_name]);

  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div className="black-color">
        <div className="">
          <div className="layout px-4 pb-20">
            <div className="flex flex-col lg:gap-20 gap-10">
              <div className="flex flex-col lg:gap-20 gap-10">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="lg:text-[35px] text-[25px] font-semibold">
                    {fetchedData?.detail.title}
                  </div>
                  <div className="text-color font-medium text-[16px]">
                    <div className="flex gap-2 items-center">
                      <div className="ml-[4px]">
                        <CiClock2 size={20} />
                      </div>
                      <div>
                        {new Date(
                          fetchedData?.detail.created_at
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
                  <div className="flex  items-center justify-center">
                    <img
                      src={fetchedData?.detail.image_link}
                      alt=""
                      className="h-[50vh] lg:w-[60%] rounded-[8px] object-cover"
                    />
                  </div>

                  <div
                    className="leading-[26px]"
                    dangerouslySetInnerHTML={{
                      __html: fetchedData?.detail.description,
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
                    {fetchedData?.related.map((data: INews, index: any) => {
                      return (
                        <Link href={`/news/${data?.slug}`} key={index}>
                          <div className="flex flex-col gap-5">
                            <div>
                              <img
                                src={data?.image_link}
                                alt=""
                                className="h-[200px] object-cover rounded-[8px]"
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
  } else {
    return <div>Error</div>;
  }
};

export default NewsInfo;
