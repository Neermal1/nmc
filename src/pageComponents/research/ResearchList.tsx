/* eslint-disable @next/next/no-img-element */
import useFetchData from "@/hooks/useFetchData";
import { Research } from "@/interface/interface";
import { useRouter } from "next/router";
import React from "react";

const ResearchCard = ({ title, imageSrc, description, onClick }: any) => {
  return (
    <div className=" bg-white  cursor-pointer" onClick={onClick}>
      <img
        className="w-full h-48 object-cover object-center rounded-xl"
        src={imageSrc}
        alt={title}
      />
      <div className="px-2 py-2 md:py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p
          className="text-gray-700 text-base line-clamp-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <button
          className="mt-4 bg-primary text-white hover:text-primaryYellow transition duration-300 font-medium py-2 px-4 rounded"
          onClick={onClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const ResearchList = () => {
  const router = useRouter();
  const { fetchedData } = useFetchData("research/list");
  const researchData: Research[] = fetchedData;
  // const researchData = [
  //   {
  //     slug: "research-title-1",
  //     title: "Research Title 1",
  //     imageSrc: "https://via.placeholder.com/300",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem id orci consectetur tristique.",
  //   },
  //   {
  //     slug: "research-title-2",
  //     title: "Research Title 2",
  //     imageSrc: "https://via.placeholder.com/300",
  //     description:
  //       "Praesent blandit ipsum at risus fringilla, non tincidunt enim gravida. Aliquam erat volutpat.",
  //   },
  // ];

  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchData?.map((research: Research, index: number) => (
          <ResearchCard
            key={index}
            title={research?.title}
            imageSrc={research?.image_link}
            description={research?.description}
            onClick={() => router.push(`/research/${research?.slug}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ResearchList;
