/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "antd";
import useFetchData from "@/hooks/useFetchData";
import { Slider } from "@/interface/interface";
import Loader from "@/components/Loader/Loader";

export default function HeroSection() {
  const { fetchedData, loading } = useFetchData("slider/list");
  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <div className="w-full h-full">
        <Carousel autoplay>
          {fetchedData?.map((image: Slider) => (
            <div key={image?.id}>
              <img
                src={image?.image_link}
                alt={`Image ${image.id}`}
                className="w-full lg:h-[80vh] object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
