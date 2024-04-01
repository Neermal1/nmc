import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { IVideoTestimonial } from "@/interface/interface";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

const VideoTestimonials: React.FC = () => {
  const { fetchedData, loading } = useFetchData("testimonial/list");
  const testimonials = fetchedData?.video;
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideoModal = (iframe: string) => {
    setSelectedVideo(iframe);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const extractThumbnailUrl = (link: string) => {
    const videoId = link.split("v=")[1];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return ""; // Return an empty string if the video ID cannot be extracted
  };

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
          {testimonials?.map((videoItem: IVideoTestimonial, index: number) => (
            <div
              key={index}
              className="relative lg:w-96 lg:h-auto overflow-hidden cursor-pointer rounded-lg mx-8"
              onClick={() => openVideoModal(videoItem?.link)}
              style={{ marginRight: "15px" }} // Add margin-right for the gap between cards
            >
              <img
                src={extractThumbnailUrl(videoItem?.link)}
                alt={videoItem?.name}
                className="w-full h-full object-cover rounded-lg scale-150"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M0 0l20 10L0 20V0zm14 10l-9 5V5l9 5z" />
                </svg>
              </div>
              <div className="absolute inset-0 p-4 bg-black bg-opacity-60 text-white">
                <p className="text-lg font-semibold">{videoItem?.name}</p>
              </div>
            </div>
          ))}
        </Carousel>

        {selectedVideo && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 w-full h-96">
              <button
                className="absolute -top-8 right-8 md:right-16 text-white text-xl"
                onClick={closeVideoModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ReactPlayer
                url={selectedVideo}
                playing={true}
                loop={true}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default VideoTestimonials;
