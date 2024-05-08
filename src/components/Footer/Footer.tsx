import useFetchData from "@/hooks/useFetchData";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"; // Import icons

import axiosInstance from "@/axiosInstance/axiosInstance";
import Link from "next/link";

const Footer = () => {
  const { fetchedData, loading } = useFetchData("company-profile");

  //states
  const [isLoading, setIsLoading] = useState(false);

  const footerList = [
    {
      title: "Quick Links",
      list: [
        {
          name: "Appointment",
          slug: "book-an-appointment",
          linktype: null,
          link: false,
        },

        {
          name: "Department",
          slug: "departments",
          linktype: null,
          link: false,
        },
        {
          name: "About Us",
          slug: "about",
          linktype: null,
          link: false,
        },
        {
          name: "Notice",
          slug: "notices",
          linktype: null,
          link: false,
        },
        {
          name: "Research",
          slug: "/research",
          linktype: null,
          link: false,
        },
      ],
    },
    {
      title: "Contact Us",
      list: [
        {
          name: ` ${fetchedData?.company_phone}`,
          linktype: "tel:",
          icon: <FiPhone />, // Add phone icon
        },
        {
          name: `${fetchedData?.company_email}`,
          linktype: "mailto",
          icon: <FiMail />, // Add mail icon
        },
        {
          name: `${fetchedData?.company_address}`,
          linktype: null,
          link: true,
          icon: <FiMapPin />, // Add location icon
        },
      ],
    },
  ];

  const [form] = Form.useForm();

  const handleNewsLetter = async (values: any) => {
    try {
      setIsLoading(true);

      const payload = {
        email: values.email,
      };
      const response = await axiosInstance.post("subscription", payload);
      notification.success({
        message: `${response.data.message}`,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      form.resetFields();
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <div>Loading</div>;
  } else if (fetchedData) {
    return (
      <div
        className=""
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
        }}
      >
        <div className="layout component-padding flex flex-col gap-7">
          <div className="grid lg:grid-cols-8 grid-cols-1 gap-20">
            <div className="flex flex-col gap-6 lg:col-span-3    ">
              <div className="flex items-center gap-4  h-[60px]">
                <div className="">
                  <img
                    src={fetchedData?.logo_link}
                    alt=""
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>
                <div className="text-[18px] font-semibold">
                  {fetchedData?.company_name}
                </div>
              </div>
              <div
                className="text-[12px]"
                dangerouslySetInnerHTML={{
                  __html: fetchedData?.footer_text,
                }}
              ></div>
            </div>
            <div className="lg:col-span-5  grid lg:grid-cols-3 gap-8  ">
              <div className="col-span-2 grid grid-cols-2">
                {footerList?.map((data, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-6">
                      <div className="h-[60px] text-[18px] font-semibold">
                        {data?.title}
                      </div>
                      <div className="flex flex-col gap-4">
                        {data?.list.map((data: any, index) => {
                          return (
                            <div key={index}>
                              <div className="flex items-center">
                                {data.icon && (
                                  <span className="mr-2">{data.icon}</span>
                                )}
                                {data?.linktype !== null ? (
                                  <a href={`${data?.linktype}:${data?.name}`}>
                                    {data?.name}
                                  </a>
                                ) : (
                                  <div>
                                    {data?.link == true && (
                                      <div>{data?.name}</div>
                                    )}
                                  </div>
                                )}
                                {data?.slug && (
                                  <Link href={`/${data?.slug}`} key={index}>
                                    <div className={``}>{data?.name}</div>
                                  </Link>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-1 flex lg:justify-end">
                <div>
                  <div className="h-[60px] text-[18px] font-semibold">
                    Newsletter
                  </div>
                  <div>
                    <Form onFinish={handleNewsLetter} form={form}>
                      <Form.Item
                        hasFeedback
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please provide your email address",
                          },
                          {
                            pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                            message:
                              "Please provide your email address in correct format",
                          },
                        ]}
                        className=""
                      >
                        <Input
                          className=""
                          size="large"
                          placeholder="Enter your email address here"
                        />
                      </Form.Item>
                      <Button
                        htmlType="submit"
                        size="large"
                        loading={isLoading}
                        style={{
                          backgroundColor: "#EAF1FF",
                          color: "#1e1e1e",
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px]  border-white ">
            <div className="mt-4">
              <div className="flex lg:flex-row flex-col justify-between  gap-5 lg:items-center">
                <div>© 2023 Nepal Medical College. All Rights Reserved.</div>
                <div>
                  <div className="flex lg:gap-4 items-center gap-5">
                    {fetchedData?.facebook && (
                      <Link
                        href={`${fetchedData?.facebook}`}
                        className="  bg-[#EAF1FF] hover:border-[1px] hover:border-[#EAF1FF] text-black  outline-[#EAF1FF] rounded-full p-2 hover:bg-primary hover:text-white hover:bg-transparent"
                        target="_blank"
                      >
                        <FaFacebookF className="h-[2.5vh] w-[2.5vh]" />
                      </Link>
                    )}
                    {fetchedData?.instagram && (
                      <Link
                        href={`${fetchedData?.instagram}`}
                        className="  bg-[#EAF1FF] hover:border-[1px] hover:border-[#EAF1FF] text-black  outline-[#EAF1FF] rounded-full p-2 hover:bg-primary hover:text-white hover:bg-transparent"
                        target="_blank"
                      >
                        {" "}
                        <BsInstagram className="h-[2.5vh] w-[2.5vh]" />
                      </Link>
                    )}

                    {fetchedData?.youtube && (
                      <Link
                        href={`${fetchedData?.youtube}`}
                        className="transition-transform duration-[1000] ease-in-out  bg-[#EAF1FF] hover:border-[1px] hover:border-[#EAF1FF] text-black  outline-[#EAF1FF] rounded-full p-2 hover:bg-primary hover:text-white hover:bg-transparent"
                        target="_blank"
                      >
                        {" "}
                        <BsYoutube className="h-[2.5vh] w-[2.5vh]" />
                      </Link>
                    )}

                    {fetchedData?.twitter && (
                      <Link
                        href={`${fetchedData?.twitter}`}
                        className="transition-transform duration-[1000] ease-in-out  bg-[#EAF1FF] hover:border-[1px] hover:border-[#EAF1FF] text-black  outline-[#EAF1FF] rounded-full p-2 hover:bg-primary hover:text-white hover:bg-transparent"
                        target="_blank"
                      >
                        {" "}
                        <FaXTwitter className="h-[2.5vh] w-[2.5vh]" />
                      </Link>
                    )}
                  </div>
                </div>
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

export default Footer;
