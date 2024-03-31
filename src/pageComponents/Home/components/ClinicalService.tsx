//button components
import Button from "@/components/Button/Button";

//hooks
import useFetchData from "@/hooks/useFetchData";

//interface
import { IClinicalServiceProps } from "@/interface/interface";

//images
import Link from "next/link";

//react icons
import { LuImageOff } from "react-icons/lu";

const ClinicalService = () => {
  const { fetchedData, loading } = useFetchData("home/departments/list");
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div className="layout component-padding black-color">
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-10">
            <div className="">
              <div className="flex flex-col gap-8 sticky top-[140px]">
                <div className="flex flex-col gap-6">
                  <div
                    style={{
                      color: "var(--primary-color)",
                    }}
                    className="lg:text-[36px] text-[25px] lg:font-bold font-semibold"
                  >
                    EXPLORE OUR CENTRES OF CLINICAL EXCELLENCE
                  </div>
                  <div className="lg:text-[20px] text-[16px] font-medium">
                    Learn about the world class health care we provide
                  </div>
                </div>
                <Link href="/all-department">
                  <Button
                    data={{
                      name: "Explore More",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                {fetchedData?.map((data: IClinicalServiceProps, index: any) => {
                  return (
                    <Link
                      href={`/departmenthead/${data?.slug}`}
                      key={index}
                      className="group"
                    >
                      <div className="flex items-center gap-2 h-[12vh] group-hover:bg-[#1F2B6C] border-[#1e1e1e] border-[1px] px-6 py-3 rounded-[8px] group-hover:text-[#FFDD1C]">
                        <div>
                          {data?.icon.length > 0 ? (
                            <img
                              src={data?.icon_link}
                              alt="loading"
                              className="h-[55px] w-[55px] object-contain"
                            />
                          ) : (
                            <div>
                              <LuImageOff
                                size={36}
                                className="text-[#1e1e1e]"
                              />
                            </div>
                          )}
                        </div>
                        <div></div>

                        <div className="text-[16px] font-medium">
                          {data?.name}
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
    );
  }
};

export default ClinicalService;
