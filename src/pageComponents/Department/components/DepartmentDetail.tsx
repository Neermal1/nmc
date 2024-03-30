import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//interface
import { IRelatedDepartment } from "@/interface/interface";

//antd
import { LuDot } from "react-icons/lu";

//carousel
import "react-multi-carousel/lib/styles.css";

//images

const DepartmentDetail = ({ departmentInfo }: any) => {
  //for params
  const router = useRouter();

  //states
  const [department_name, set_department_name] = useState<any>();

  useEffect(() => {
    if (router.isReady) {
      const { department_name } = router.query;
      set_department_name(department_name);
    }
  }, [router]);

  return (
    <div>
      <div className="layout component-padding black-color flex flex-col gap-20">
        <div className="grid lg:grid-cols-8 lg:gap-20 gap-10">
          <div className="lg:col-span-5">
            <div>
              <div className="flex flex-col gap-10">
                <div className=" rounded-[8px] overflow-hidden">
                  <img src={`${departmentInfo?.department?.image_link}`} />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="lg:text-[35px] text-[25px] font-semibold">
                    {departmentInfo?.department?.name}
                  </div>
                  <div className="leading-[30px]">
                    {departmentInfo?.department?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="border-[1px] flex flex-col gap-6  sticky top-[120px] bg-white hover:drop-shadow-md border-gray-300 rounded-[8px] p-6">
              <div className="border-b-[1px] border-gray-300">
                <div className=" border-gray-300 mb-2 lg:text-[20px] font-medium">
                  Department List
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {departmentInfo?.related?.map(
                  (data: IRelatedDepartment, index: number) => {
                    return (
                      <div key={index}>
                        <Link
                          href={`/department/${department_name}/${data?.slug}`}
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
        <div className="flex flex-col gap-10">
          <div className="text-[35px] font-semibold">
            Meet Our Popular Doctors
          </div>

          <div className="grid lg:grid-cols-4 gap-10">
            {departmentInfo?.doctors.length > 0 &&
              departmentInfo?.doctors?.map((data: any, index: number) => {
                return (
                  <Link
                    href={`/doctor/${data?.slug}`}
                    key={index}
                    className="bg-white drop-shadow-md rounded-[8px] p-6 flex flex-col gap-4"
                  >
                    <div>
                      <img src={data && data?.image_link} alt="" />
                    </div>
                    <div className="black-color flex flex-col gap-1">
                      <div className="text-[18px]">{data?.title}</div>
                      <div
                        className="text-[16px] font-semibold"
                        style={{
                          color: "var(--accent-color)",
                        }}
                      >
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
  );
};

export default DepartmentDetail;
