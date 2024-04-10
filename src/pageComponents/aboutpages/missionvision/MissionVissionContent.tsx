import Image from "next/image";
import MissionImage from "../../../assets/MissionVision/Mission.png";
import VisionImage from "../../../assets/MissionVision/vision.png";
import useFetchData from "@/hooks/useFetchData";
import Loader from "@/components/Loader/Loader";

const MissionVisionItem = ({ title, imageSrc, description }: any) => (
  <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center">
    <div className="lg:w-4/6">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4">
        {title}
      </h1>
      <p
        className="text-sm lg:text-md lg:text-lg leading-relaxed text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
    <div className="lg:w-2/6 flex lg:items-center lg:justify-center">
      <Image
        src={imageSrc}
        alt={title}
        className="w-32 h-32 lg:w-52 lg:h-52 my-2 lg:my-4"
      />
    </div>
  </div>
);

export default function MissionVisionContent() {
  const { fetchedData, loading } = useFetchData("/company-profile");
  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-16">
        <div className="flex flex-col  space-y-8 lg:space-y-16">
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
