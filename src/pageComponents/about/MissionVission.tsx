import Image from "next/image";
import MissionImage from "../../assets/MissionVision/Mission.png";
import VisionImage from "../../assets/MissionVision/vision.png";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader/Loader";

const MissionVisionItem = ({ title, imageSrc, description }: any) => (
  <div className="w-full lg:w-1/2 flex items-center">
    <div className="">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary mb-4">
        {title}
      </h1>
      <Image
        src={imageSrc}
        alt={title}
        className="w-32 h-32 lg:w-40 lg:h-40 my-2 lg:my-4"
      />
      <p
        className="text-sm lg:text-md lg:text-lg leading-relaxed text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
);

export default function MissionVision() {
  const { fetchedData, loading } = useFetchData("/company-profile");
  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <section className="py-4">
        <div className="flex flex-col lg:flex-row items-baseline space-y-8 lg:space-y-0 lg:space-x-12">
          <MissionVisionItem
            title="Our Mission"
            imageSrc={MissionImage}
            description={fetchedData?.mission}
          />
          <MissionVisionItem
            title="Our Vision"
            imageSrc={VisionImage}
            description={fetchedData?.vision}
          />
        </div>
      </section>
    );
  }
}
