import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import { IMessageFromDirector } from "@/interface/interface";

export default function MessageContent({
  data,
}: {
  data: IMessageFromDirector;
}) {
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-16">
      <div className="">
        <div className="flex items-center justify-center mb-4 lg:mb-8">
          <div className="text-center">
            <ComponentHeader
              data={{
                main_title: `Message From ${data?.position}`,
              }}
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row  space-y-4 lg:space-y-0 lg:space-x-8 xl:space-x-16">
          <div className="lg:w-4/10">
            <div className="lg:w-96 lg:h-96">
              <img
                src={data?.image_link}
                alt=""
                className="w-full h-full object-top object-cover rounded-xl"
              />
            </div>
            <div className="px-2 mt-2 lg:mt-4 font-semibold text-base lg:text-lg">
              <h1>{data?.name}</h1>
              <h1>{data?.position}</h1>
              <h1>Nepal Medical College</h1>
            </div>
          </div>
          <div className="lg:w-6/10 flex items-center">
            <div>
              <p
                className="text-sm md:text-base text-justify"
                dangerouslySetInnerHTML={{ __html: data?.message }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
