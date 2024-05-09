import CommonBanner from "@/components/Banner/CommonBanner";
import SecondaryButton from "@/components/Button/SecondaryButton";
import { IRelatedDepartment } from "@/interface/interface";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import DepartmentBranch from "./DepartmentBranch";

const DepartmentHeadDetail = ({ departmentHeadInfo }: any) => {
  return (
    <div className="">
      <CommonBanner
        headerName={departmentHeadInfo?.details?.name}
        imageLink={departmentHeadInfo?.details?.image_link}
      />
      <div className="layout component-padding ">
        <div className="flex flex-col gap-20">
          <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
            <div className="lg:col-span-5">
              <div>
                <div className="flex flex-col gap-10">
                  <div className="lg:text-[35px] text-[25px] font-semibold ">
                    {departmentHeadInfo?.details?.name}
                  </div>
                  <div className=" rounded-[8px] overflow-hidden">
                    <img
                      src={departmentHeadInfo?.details?.image_link}
                      alt=""
                      className="h-[50vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div
                      className="leading-[30px]"
                      dangerouslySetInnerHTML={{
                        __html: departmentHeadInfo?.details?.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 flex flex-col">
              <div className="border-[1px] flex flex-col gap-6  sticky top-[120px] bg-white hover:drop-shadow-md border-gray-300 rounded-[8px] p-6">
                <div className="border-b-[1px] border-gray-300">
                  <div className=" border-gray-300 mb-2 lg:text-[20px] font-medium">
                    Related Departments
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    {departmentHeadInfo?.others
                      ?.slice(0, 5)
                      .map((data: IRelatedDepartment, index: number) => {
                        return (
                          <div key={index}>
                            <Link
                              href={`/departments/${data?.slug}`}
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
                      })}
                  </div>
                  <Link href="/departments">
                    <SecondaryButton
                      data={{
                        name: "View More",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <DepartmentBranch branchData={departmentHeadInfo?.departments} />
          </div>

          <div className="flex flex-col gap-10">
            {departmentHeadInfo?.doctors.length > 0 && (
              <div className="text-[35px] font-semibold">
                Meet Our Popular Doctors
              </div>
            )}

            <div className="grid lg:grid-cols-4 gap-10 ">
              {departmentHeadInfo?.doctors.length > 0 &&
                departmentHeadInfo?.doctors?.map((data: any, index: number) => {
                  return (
                    <Link
                      href={`/doctor/${data?.slug}`}
                      key={index}
                      className="bg-white drop-shadow-md items-center rounded-[8px] p-6 flex flex-col gap-4"
                    >
                      <div>
                        <img src={data && data?.image_link} alt="" />
                      </div>
                      <div className="black-color flex flex-col items-center gap-1">
                        <div className="text-[18px]">{data?.title}</div>
                        <div className="text-[16px] text-center font-semibold">
                          {data?.name}
                        </div>
                        {data?.designation !== null && (
                          <div
                            className="text-[16px] font-semibold"
                            style={{
                              color: "var(--accent-color)",
                            }}
                          >
                            {data?.designation}
                          </div>
                        )}

                        {data?.degree !== null && (
                          <div
                            className="text-[16px] font-semibold"
                            style={{
                              color: "var(--accent-color)",
                            }}
                          >
                            {data?.degree}
                          </div>
                        )}
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
};

export default DepartmentHeadDetail;
