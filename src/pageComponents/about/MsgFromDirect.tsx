import useFetchData from "@/hooks/useFetchData";
import { IMessageFromDirector } from "@/interface/interface";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MsgFromDirect() {
  const { fetchedData: messages, loading } = useFetchData("messages");

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
    return <div>Loading...</div>;
  } else if (messages) {
    return (
      <section className="py-8">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          pauseOnHover={false}
          arrows={true}
          showDots={false}
        >
          {messages?.map((person: IMessageFromDirector, index: number) => (
            <div key={index} className="lg:px-6">
              <div className="flex items-center justify-center mb-4 lg:mb-8">
                <div className="text-center">
                  <h1 className="text-lg md:text-2xl font-medium">
                    {person?.name}
                  </h1>
                  <h2 className="text-sm lg:text-base">{person?.position}</h2>
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row  space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="lg:w-1/2 h-full">
                  <img
                    src={person?.image_link}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="lg:w-1/2 h-full flex items-center">
                  <div>
                    <p
                      className="text-sm md:text-base text-justify"
                      dangerouslySetInnerHTML={{ __html: person?.message }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    );
  }
}
