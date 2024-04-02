import { IFacility } from "@/interface/interface";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function DetailsComponent({
  description,
  title,
  imageLink,
  relatedFacilities,
}: any) {
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid lg:grid-cols-4 space-x-4 lg:space-x-8">
        <div className="col-span-3 w-full h-full">
          <div>
            <h1 className="mb-2 text-2xl lg:text-4xl text-primary font-semibold">
              {title}
            </h1>
            <div className="w-32 border-2 border-primaryYellow"></div>
            <div className="w-full my-4 lg:my-8">
              <img
                src={imageLink}
                alt=""
                className="w-full lg:h-96 rounded-lg object-cover"
              />
            </div>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="  sticky top-32">
            <h2 className="text-xl lg:text-2xl font-medium mb-4">
              Related Facilities
            </h2>
            <div className="grid gap-4">
              {relatedFacilities?.map((facility: IFacility) => (
                <Link
                  key={facility?.id}
                  href={`/facility/${facility?.slug}`}
                  className="w-full p-2 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={facility?.image_link}
                      alt=""
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <h3 className="text-lg lg:text-xl font-medium">
                      {facility?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
