import Loader from "@/components/Loader/Loader";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import useFetchData from "@/hooks/useFetchData";
import { IMessage, IMessageFromDirector } from "@/interface/interface";
import Link from "next/link";
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
    return (
      <div>
        <Loader />
      </div>
    );
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
          {messages?.map((person: IMessage, index: number) => (
            <div key={index} className="lg:px-6">
              <div className="flex items-center justify-center mb-4 lg:mb-8">
                <div className="text-center">
                  <ComponentHeader
                    data={{
                      main_title: `Message From ${person?.position}`,
                    }}
                  />
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row  space-y-4 lg:space-y-0 lg:space-x-8 ">
                <div className="lg:w-4/10">
                  <div className="lg:w-80 lg:h-80">
                    <img
                      src={person?.image_link}
                      alt=""
                      className="w-full h-full object-top object-cover rounded-xl"
                    />
                  </div>
                  <div className="mt-2 lg:mt-4 font-semibold text-base lg:text-lg">
                    <h1>{person?.name}</h1>
                    <h1>{person?.position}</h1>
                    <h1>Nepal Medical College</h1>
                  </div>
                </div>
                <div className="lg:w-6/10">
                  <div>
                    <p
                      className="text-sm md:text-base text-justify line-clamp-6 lg:line-clamp-[15]"
                      dangerouslySetInnerHTML={{ __html: person?.message }}
                    />
                    <div className="mt-4">
                      <Link
                        href={`/about/messages/${person?.slug}`}
                        className="px-4 py-2 bg-primary text-white rounded-lg"
                      >
                        Read more
                      </Link>
                    </div>
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
