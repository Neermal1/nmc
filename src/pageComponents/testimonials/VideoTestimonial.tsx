import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { IVideoTestimonial } from "@/interface/interface";
import { Modal } from "antd";
import React, { useState } from "react";
import { GoPlay } from "react-icons/go";
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

  const autoThumbnail = (link: string) => {
    const videoId = link.split("v=")[1];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return "";
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
            <VideoCard
              key={index}
              videoItem={videoItem}
              onClick={() => openVideoModal(videoItem?.link)}
              thumbnailUrl={autoThumbnail(videoItem?.link)}
            />
          ))}
        </Carousel>

        <Modal
          open={selectedVideo !== null}
          footer={null}
          onCancel={() => {
            setSelectedVideo(null);
          }}
          destroyOnClose={true}
          centered
          className="w-full"
        >
          <div className="">
            <ReactPlayer
              url={selectedVideo || undefined}
              playing={true}
              loop={true}
              controls={true}
              width="100%"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Modal>
      </div>
    );
  }
};

export default VideoTestimonials;

interface VideoCardProps {
  videoItem: IVideoTestimonial;
  onClick: () => void;
  thumbnailUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoItem,
  onClick,
  thumbnailUrl,
}) => (
  <div
    className="relative lg:w-96 lg:h-auto overflow-hidden cursor-pointer rounded-lg mx-8"
    onClick={onClick}
    style={{ marginRight: "15px" }}
  >
    <img
      src={thumbnailUrl}
      alt={videoItem?.name}
      className="w-full h-full object-cover rounded-lg scale-150"
    />

    <div className="absolute inset-0 p-4 bg-black bg-opacity-60 text-white">
      <p className="text-lg font-semibold">{videoItem?.name}</p>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <GoPlay className="h-16 w-16 text-white" />
    </div>
  </div>
);
