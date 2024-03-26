import Image from "next/image";
import mission from "../../assets/MissionVision/Mission.png";
import vision from "../../assets/MissionVision/vision.png";

export default function MissionVission() {
  return (
    <section className="py-4">
      <div className="flex flex-col lg:flex-row items-center space-x-8 lg:space-x-12">
        <div className="w-full flex items-center">
          <div className="">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary mb-4">
              Our Mission
            </h1>
            <Image
              src={mission}
              alt="Mission"
              className="w-52 h-52 my-2 lg:my-4"
            />
            <p className="text-sm lg:text-md lg:text-lg leading-relaxed text-justify">
              Our mission at Nepal Medical College is to provide excellent
              medical education, conduct innovative research, and deliver
              compassionate healthcare services to our community. We strive to
              produce highly skilled and ethical healthcare professionals who
              are committed to serving humanity with dedication and integrity.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary mb-4">
              Our Vision
            </h1>
            <Image
              src={vision}
              alt="Vision"
              className="w-52 h-52 my-2 lg:my-4"
            />
            <p className="text-sm lg:text-md lg:text-lg leading-relaxed text-justify">
              Our vision is to be a leading center of excellence in medical
              education, research, and healthcare delivery in Nepal and beyond.
              We aim to continuously enhance our academic programs, foster a
              culture of innovation and collaboration, and set new benchmarks in
              patient care and clinical outcomes. Through our efforts, we aspire
              to contribute significantly to the advancement of healthcare and
              the well-being of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
