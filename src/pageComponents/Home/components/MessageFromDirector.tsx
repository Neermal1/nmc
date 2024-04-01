//hooks
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import useFetchData from "@/hooks/useFetchData";

//interface
import { IMessageFromDirector } from "@/interface/interface";

//react multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MessageFromDirector = () => {
  const { fetchedData, loading } = useFetchData("messages");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  if (loading) {
    return <div>LOading</div>;
  } else if (fetchedData) {
    return (
      <div className="bg-[#EAF1FF]">
        <div className="layout  component-padding flex flex-col gap-20">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            pauseOnHover={false}
            arrows={false}
            // autoPlay={true}
            // autoPlaySpeed={3000}
            showDots={true}
          >
            {fetchedData &&
              fetchedData?.map((data: IMessageFromDirector, index: any) => {
                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: "20px",
                    }}
                    className="flex flex-col gap-10"
                  >
                    <div className="flex items-center justify-center">
                      <ComponentHeader
                        data={{
                          main_title: `Message From ${data?.position}`,
                        }}
                      />
                    </div>
                    <div className="grid lg:grid-cols-5 gap-10">
                      <div className="lg:col-span-2">
                        <div className="sticky top-[140px]">
                          <img
                            src={data?.image_link}
                            alt=""
                            className="lg:w-[50vh] lg:h-[50vh] w-[25vh] h-[25vh] rounded-full  object-cover"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <div
                          className="leading-[28px]"
                          dangerouslySetInnerHTML={{
                            __html: data?.message,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default MessageFromDirector;
