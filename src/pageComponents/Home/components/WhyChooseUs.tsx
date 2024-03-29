import Link from "next/link";

//components
import Button from "@/components/Button/Button";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";

//hooks
import useFetchData from "@/hooks/useFetchData";

const WhyChooseUs = () => {
  const { fetchedData, loading } = useFetchData("why-choose-us");

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="layout component-padding flex flex-col gap-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-10">
            <div>
              <ComponentHeader
                data={{
                  main_title: "Why Choose Us",
                }}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: fetchedData?.section?.description,
              }}
            ></div>
            <div>
              <Link href="#">
                <Button
                  data={{
                    name: "Learn More",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end">
            <div className="overflow-hidden rounded-[8px] h-[50vh]  ">
              <img
                src={fetchedData?.section?.image_link}
                alt=""
                className="h-[50vh] w-[100%] object-cover  hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-5 gap-6 grid-cols-2">
            {fetchedData?.list?.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center"
                >
                  <div>
                    <img
                      src={data?.image_link}
                      alt=""
                      className="h-[80px] w-[80px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      style={{
                        color: "var(--accent-main-color)",
                      }}
                      className="lg:text-[48px] font-semibold"
                    >
                      {data?.number}+
                    </div>
                    <div className="text-[12px]">{data?.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default WhyChooseUs;
