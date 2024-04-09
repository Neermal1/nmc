//components
import Button from "@/components/Button/Button";
import SecondaryButton from "@/components/Button/SecondaryButton";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import useFetchData from "@/hooks/useFetchData";
import { INews } from "@/interface/interface";
import { formatDate } from "@/utils/FormatDate";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

//hooks

const News = () => {
  const { fetchedData, loading } = useFetchData("news/list");
  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div className="bg-[#EAF1FF] mt-20">
        <div className="layout component-padding flex flex-col gap-20">
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <ComponentHeader
                data={{
                  small_title: "Better Information Better Health",
                  main_title: "NEWS",
                }}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 max-w-5xl mx-auto gap-10">
            {fetchedData?.slice(0, 4).map((data: INews, index: any) => {
              return (
                <Link
                  href={`/news/${data?.slug}`}
                  key={index}
                  className="flex gap-4"
                >
                  <div>
                    <div className="h-[150px] w-[150px]">
                      <img
                        src={data?.image_link}
                        alt=""
                        className="h-[150px] w-[150px] object-cover rounded-[8px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-[18px] font-semibold text-[#249CDE]">
                        {data?.title}
                      </div>
                      <div>{formatDate(data?.created_at)}</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaEye className="text-[#249CDE]" />
                      <div>{data?.views}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link href="/news" className="flex items-center justify-center">
            <Button
              data={{
                name: "View More",
              }}
            />
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default News;
