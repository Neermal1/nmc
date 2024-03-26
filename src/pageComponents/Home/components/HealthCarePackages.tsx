import Image from "next/image";
import Link from "next/link";

//components
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import SecondaryButton from "@/components/Button/SecondaryButton";

//react icons
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { LuImageOff } from "react-icons/lu";

//images
import girl from "../../../../public/images/healthCarePackage/girl.png";

//hooks
import useFetchData from "@/hooks/useFetchData";

//interface
import { IHealthCareProps } from "@/interface/interface";

const HealthCarePackages = () => {
  const { fetchedData, loading } = useFetchData("packages");

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="layout component-padding black-color">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-center text-center">
            <ComponentHeader
              data={{
                small_title: "We Care about your Health",
                main_title: "OUR HEALTH CARE PACKAGES",
              }}
            />
          </div>
          <div className="grid lg:grid-cols-6 gap-10">
            <div className="bg-[#BFD2F8] lg:col-span-2 rounded-[8px] px-6 py-6 flex flex-col gap-4">
              <div
                className="flex items-center"
                style={{
                  color: "var(--primary-color)",
                }}
              >
                <div className="lg:text-[26px] font-medium">
                  SAVE MORE WITH GOODPLANS
                </div>
                <div>
                  <FaArrowRightLong size={30} />
                </div>
              </div>
              <div className="text-[14px] font-medium">
                Choose a plan and get our health packages. Then get checked up
                for you and your loved once.
              </div>
              <div className="">
                <Image
                  src={girl}
                  alt="loading"
                  className="h-[45vh] object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-4   grid lg:grid-cols-2 gap-10">
              {fetchedData?.map((data: IHealthCareProps, index: any) => {
                return (
                  <div
                    key={index}
                    className="border-[1px]  border-[#1e1e1e]  rounded-[8px] px-6 py-4"
                  >
                    <div className="flex flex-col justify-between gap-10 h-[100%] ">
                      <div className="flex flex-col gap-6 ">
                        <div className="flex items-center gap-2 ">
                          <div>
                            {data?.image.length > 0 ? (
                              <img
                                src={data?.image_link}
                                alt="loading"
                                className="h-[50px] w-[50px] object-contain"
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

                          <div className="lg:text-[32px] font-bold text-[28px]">
                            {data?.name}
                          </div>
                        </div>
                        <div className="text-[22px] text-[#A9A9AA]">
                          What You Will Get
                        </div>
                        <div className="flex flex-col gap-4">
                          {data?.details?.map((data, index: any) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-2 "
                              >
                                <div>
                                  <FaCircleCheck
                                    className="text-[#35353F]"
                                    size={20}
                                  />
                                </div>
                                <div className="text-[18px]">
                                  {data?.service}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="border-dashed border-t-[2px] border-[#35353F]">
                          <div
                            style={{
                              marginTop: "8px",
                              color: "var(--primary-color)",
                            }}
                            className="lg:text-[32px] font-bold text-[25px]"
                          >
                            Rs. {data?.price.toLocaleString()} /-
                          </div>
                        </div>
                      </div>
                      <Link href="#">
                        <SecondaryButton
                          data={{
                            name: "Choose Us",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HealthCarePackages;
