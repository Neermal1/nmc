import CommonBanner from "@/components/Banner/CommonBanner";
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
        <Metatag heading="NMC " subheading="All News" og_type="article" description="" og_image="/images/ogImage/homePage.png"/>
        <CommonBanner
          headerName="News"
          imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
        />
        <div className="">
          <div className="layout component-padding">
            <div className="flex flex-col gap-10">
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
