import useFetchData from "@/hooks/useFetchData";
import { IRelatedService } from "@/interface/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";

const ServiceInfo = () => {
  const router = useRouter();

  //states
  const [service_name, set_service_name] = useState<any>();

  useEffect(() => {
    if (router.isReady) {
      const { service_name } = router.query;
      set_service_name(service_name);
    }
  }, [router]);

  const { fetchedData, loading, refetchData } = useFetchData(
    service_name && `service/${service_name}`
  );

  console.log(fetchedData);

  useEffect(() => {
    refetchData();
  }, [service_name]);

  return (
    <div>
      <div className="layout component-padding black-color flex flex-col gap-20">
        <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
          <div className="lg:col-span-5">
            <div>
              <div className="flex flex-col gap-10">
                <div className=" rounded-[8px] overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611219.jpg?t=st=1711523241~exp=1711526841~hmac=588e592d004db5b44c56722eee702a46bb31f6ff94820f13788c9ae5ba375a20&w=996"
                    alt=""
                    className="h-[50vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="lg:text-[35px] text-[25px] font-semibold">
                    {fetchedData?.detail?.name}
                  </div>
                  <div
                    className="leading-[30px]"
                    dangerouslySetInnerHTML={{
                      __html: fetchedData?.detail?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col sticky top-[50px]">
            <div className="border-[1px] flex flex-col gap-6 bg-white hover:drop-shadow-md border-gray-300 rounded-[8px] p-6">
              <div className="border-b-[1px] border-gray-300">
                <div className=" border-gray-300 mb-2 lg:text-[20px] font-medium">
                  Related Service
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {fetchedData?.related?.map(
                  (data: IRelatedService, index: number) => {
                    return (
                      <div key={index}>
                        <Link
                          href={`/service/${data?.slug}`}
                          className="flex items-center"
                        >
                          <div
                            style={{
                              color: "var(--accent-color)",
                            }}
                          >
                            <LuDot size={45} />
                          </div>
                          <div>{data?.name}</div>
                        </Link>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
