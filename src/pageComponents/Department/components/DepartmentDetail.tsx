import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//hooks
import useFetchData from "@/hooks/useFetchData";

//interface
import { IRelatedDepartment } from "@/interface/interface";

//antd
import { LuDot } from "react-icons/lu";

//carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Metatag from "@/utils/Metatag";

//images

const DepartmentDetail = () => {
  //for params
  const router = useRouter();

  //states
  const [department_name, set_department_name] = useState<any>();
  const [department_branch, set_department_branch] = useState<any>();

  useEffect(() => {
    if (router.isReady) {
      const { department_name } = router.query;
      const { department_branch } = router.query;

      set_department_name(department_name);
      set_department_branch(department_branch);
    }
  }, [router]);

  const { fetchedData, refetchData } = useFetchData(
    `departments/${department_name}/${department_branch}/detail`
  );

  useEffect(() => {
    refetchData();
  }, [department_branch]);

  //carousel items

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Metatag
        heading="NMC"
        subheading="Departments"
        og_image="/images/Banners/Banner2.png"
      />

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
                    {fetchedData?.department?.name}
                  </div>
                  <div className="leading-[30px]">
                    {fetchedData?.department?.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col sticky top-[50px]">
            <div className="border-[1px] flex flex-col gap-6 bg-white hover:drop-shadow-md border-gray-300 rounded-[8px] p-6">
              <div className="border-b-[1px] border-gray-300">
                <div className=" border-gray-300 mb-2 lg:text-[20px] font-medium">
                  Department List
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {fetchedData?.related?.map(
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

          <div className="flex items-center justify-center">
            {fetchedData?.doctors.length > 0 &&
              fetchedData?.doctors?.map((data: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="m-6 rounded-[8px] relative overflow-hidden "
                  >
                    <div className="hover:scale-110 rounded-[8px] transition-all duration-700">
                      <Link href="#" className="  ">
                        <img
                          src={data && data?.image_link}
                          alt=""
                          className=""
                        />
                      </Link>
                      <div className="w-full  bg-gradient-to-t  from-[#101A55]  absolute top-[50%] left-0 right-0 bottom-0"></div>
                      <div className="text-white  text-[18px] font-semibold absolute bottom-[20px] w-full text-center ">
                        {data?.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
