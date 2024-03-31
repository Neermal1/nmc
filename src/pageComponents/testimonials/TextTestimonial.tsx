import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { ITextTestimonial } from "@/interface/interface";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TextTestimonials: React.FC = () => {
  const { fetchedData, loading } = useFetchData("testimonial/list");
  const testimonials = fetchedData?.text;

  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <div>
        <Carousel
          arrows={true}
          autoPlay
          showDots={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          slidesToSlide={1}
          swipeable
        >
          {testimonials?.map((testimonial: ITextTestimonial, index: number) => (
            <div
              key={index}
              className="bg-white rounded-es-3xl rounded-lg rounded-se-3xl shadow-md p-6 lg:p-8 border border-primary mx-4"
            >
              <p className="text-gray-800 mb-4">{testimonial?.message}</p>
              <div className="flex items-center">
                <img
                  src={testimonial?.image_link}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <p className=" text-primary">{testimonial?.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
};

export default TextTestimonials;
