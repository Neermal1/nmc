import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { IVideoTestimonial } from "@/interface/interface";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

const VideoTestimonials: React.FC = () => {
  const { fetchedData, loading } = useFetchData("testimonial/list");
  const testimonials = fetchedData?.video;

  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <div className="py-8">
        <Carousel
          arrows={true}
          autoPlay
          draggable
          infinite
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
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {testimonials?.map((video: IVideoTestimonial, index: number) => (
            <div key={index} className="mx-4 h-80">
              {video?.link && (
                <ReactPlayer
                  url={video?.link}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={false}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
};

export default VideoTestimonials;
