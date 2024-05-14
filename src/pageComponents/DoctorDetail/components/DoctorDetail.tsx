import Link from "next/link";
import Image from "next/image";

//components
import CommonBanner from "@/components/Banner/CommonBanner";
import Button from "@/components/Button/Button";

//images
import degree from "../../../../public/images/random/degree.png";
import suitcase from "../../../../public/images/random/suitcase.png";
import department from "../../../../public/images/random/department.png";

import DoctorMoreDetailCard from "./DoctorMoreDetailCard";

const DoctorDetail = ({ doctorInfo }: any) => {
  return (
    <div className="black-color">
      <CommonBanner
        headerName="Doctor Detail"
        imageLink="https://img.freepik.com/premium-photo/medicine-healthcare-concept-team-group-doctors-nurses-showing-thumbs-up_380164-90454.jpg?w=1380"
      />
      <div className="layout component-padding flex flex-col gap-16">
        <div className="grid lg:grid-cols-8 gap-10">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="lg:text-[35px] text-[25px] font-semibold">
                  {doctorInfo?.name}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                  {doctorInfo?.department?.name !== null && (
                    <div className="flex items-center gap-2">
                      <div className="bg-white drop-shadow-md rounded-[8px] flex items-center justify-center">
                        <Image
                          src={department}
                          alt="suitcase"
                          height={25}
                          width={25}
                        ></Image>
                      </div>
                      <div className="lg:text-[20px] text-[16px] text-[#1f2b6c] font-semibold">
                          {doctorInfo?.department ? 
                          doctorInfo?.department?.name : 
                          doctorInfo?.department_category?.name}
                      </div>
                    </div>
                  )}

                  {doctorInfo?.designation !== null && (
                    <div className="flex items-center gap-2">
                      <div className="bg-white drop-shadow-md rounded-[8px] flex items-center justify-center">
                        <Image
                          src={suitcase}
                          alt="suitcase"
                          height={25}
                          width={25}
                        ></Image>
                      </div>
                      <div className="lg:text-[20px] text-[16px] text-[#1f2b6c] font-semibold">
                        {doctorInfo?.designation}
                      </div>
                    </div>
                  )}

                  {/* {doctorInfo?.degree !== null && (
                    <div className="flex items-center gap-2">
                      <div className="bg-white drop-shadow-md rounded-[8px] flex items-center justify-center">
                        <Image
                          src={degree}
                          alt="degree"
                          height={25}
                          width={25}
                        ></Image>
                      </div>
                      <div className="lg:text-[20px] text-[16px] text-[#1f2b6c] font-semibold">
                        {doctorInfo?.degree}
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
              <div
                className="leading-[30px] lg:w-[80%]"
                dangerouslySetInnerHTML={{
                  __html: doctorInfo?.info,
                }}
              ></div>
              {/* <div className="lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                nesciunt? Minus eaque earum iure officia ab odit tempore dicta
                soluta. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Autem, laborum perferendis. Officia necessitatibus, amet
                sequi perspiciatis facilis harum! Voluptas odio ullam adipisci,
                fuga rem quod. Fuga enim voluptates aut ad placeat soluta
                officiis illo praesentium dicta quaerat quae iste sint repellat
                minus distinctio molestias blanditiis a corrupti, ut modi vero
                explicabo. Quam dolor itaque eum dolorum voluptatibus hic
                deleniti totam nam quidem esse repellendus, debitis eos tempore,
                perferendis distinctio cumque, libero laborum. Dolor corporis
                enim veritatis nisi deserunt reiciendis quod!
              </div> */}
              <Link
                href={`/appointment/${doctorInfo?.department?.slug}/${doctorInfo?.slug}`}
                className="w-fit"
              >
                <Button
                  data={{
                    name: "Book An Appointment",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="">
              <img
                src={doctorInfo?.image_link}
                alt=""
                className="lg:h-[64vh] h-[50vh] object-cover w-[100%] rounded-[8px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="lg:text-[35px] text-[25px] font-semibold">
            More Details
          </div>
          <div className="lg:flex grid md:grid-cols-2 grid-cols-1 lg:items-center gap-4 lg:flex-row flex-col">
            {doctorInfo?.degree !== null && (
              <DoctorMoreDetailCard title="Degree">
                <div>{doctorInfo?.degree}</div>
              </DoctorMoreDetailCard>
            )}
            {doctorInfo?.nmc_no !== null && (
              <DoctorMoreDetailCard title="NMC NO">
                <div>{doctorInfo?.nmc_no}</div>
              </DoctorMoreDetailCard>
            )}
            {/* <div className="lg:flex lg:flex-row gap-4 grid grid-cols-1"> */}
            {doctorInfo?.phone !== null && doctorInfo?.phone_status === 1 && (
              <DoctorMoreDetailCard title="Phone Number">
                <a href={`tel:${doctorInfo?.phone}`}>{doctorInfo?.phone}</a>
              </DoctorMoreDetailCard>
            )}
            {doctorInfo?.email !== null && (
              <DoctorMoreDetailCard title="Email">
                <a href={`mailto:${doctorInfo?.email}`}>{doctorInfo?.email}</a>
              </DoctorMoreDetailCard>
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
