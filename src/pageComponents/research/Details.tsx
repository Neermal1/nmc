import { Activity, RelatedResearch } from "@/interface/interface";

/* eslint-disable @next/next/no-img-element */
export default function Details({
  description,
  title,
  imageLink,
  relatedResearches,
}: any) {
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="flex flex-col lg:flex-row space-x-4 lg:space-x-8">
        <div className="lg:w-3/4 lg:h-full">
          <div>
            <h1 className="mb-2 text-2xl lg:text-4xl text-primary font-semibold">
              {title}
            </h1>
            <div className="w-32 border-2 border-primaryYellow"></div>
            <div className="w-full my-4">
              <img
                src={imageLink}
                alt=""
                className="w-full lg:h-72 rounded-lg object-cover"
              />
            </div>
            <div
              className="text-sm md:text-base lg:text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="lg:w-1/4 lg:h-full sticky top-16">
          <h2 className="text-xl lg:text-2xl font-medium mb-4">
            Related Activities
          </h2>
          <div className="grid gap-4">
            {relatedResearches?.map((research: RelatedResearch) => (
              <div
                key={research?.id}
                className="w-full p-2 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={research?.image_link}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <h3 className="text-base lg:text-lg font-medium">
                    {research?.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
