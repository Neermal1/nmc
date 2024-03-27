import Image from "next/image";
import MissionImage from "../../assets/MissionVision/Mission.png";
import VisionImage from "../../assets/MissionVision/vision.png";

const MissionVisionItem = ({ title, imageSrc, description }: any) => (
  <div className="w-full lg:w-1/2 flex items-center">
    <div className="">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary mb-4">
        {title}
      </h1>
      <Image
        src={imageSrc}
        alt={title}
        className="w-32 h-32 lg:w-52 lg:h-52 my-2 lg:my-4"
      />
      <p className="text-sm lg:text-md lg:text-lg leading-relaxed text-justify">
        {description}
      </p>
    </div>
  </div>
);

export default function MissionVision() {
  return (
    <section className="py-4">
      <div className="flex flex-col lg:flex-row items-baseline space-y-8 lg:space-y-0 lg:space-x-12">
        <MissionVisionItem
          title="Our Mission"
          imageSrc={MissionImage}
          description="Our mission at Nepal Medical College is to provide excellent medical education, conduct innovative research, and deliver compassionate healthcare services to our community. We strive to produce highly skilled and ethical healthcare professionals who are committed to serving humanity with dedication and integrity."
        />
        <MissionVisionItem
          title="Our Vision"
          imageSrc={VisionImage}
          description="Our vision is to be a leading center of excellence in medical education, research, and healthcare delivery in Nepal and beyond. We aim to continuously enhance our academic programs, foster a culture of innovation and collaboration, and set new benchmarks in patient care and clinical outcomes. Through our efforts, we aspire to contribute significantly to the advancement of healthcare and the well-being of society."
        />
      </div>
    </section>
  );
}
