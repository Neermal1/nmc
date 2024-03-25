/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "antd";

const images = [
  {
    id: 1,
    imageLink:
      "https://nmc.terracecafe.com.np/upload/images/sliders/1696839108WhatsApp%20Image%202023-10-09%20at%2011.33.19%20AM(1).jpeg",
  },
  {
    id: 2,
    imageLink:
      "https://nmc.terracecafe.com.np/upload/images/sliders/1693741071slider-img.jpeg",
  },
  {
    id: 3,
    imageLink:
      "https://nmc.terracecafe.com.np/upload/images/sliders/1693741099slider-img-1.jpeg",
  },
];

export default function HeroSection() {
  return (
    <div className="w-full h-full">
      <Carousel autoplay>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.imageLink}
              alt={`Image ${image.id}`}
              className="w-full lg:h-[80vh] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
