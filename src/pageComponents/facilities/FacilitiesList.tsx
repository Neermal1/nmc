import useFetchData from "@/hooks/useFetchData";
import FacilityCard from "./FaciltityCard";
import { IFacility } from "@/interface/interface";

export default function FacilitiesList() {
  const { fetchedData: facilities } = useFetchData("facilities");
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {facilities?.map((activity: IFacility) => (
          <FacilityCard
            key={activity?.id}
            imageUrl={activity?.image_link}
            title={activity?.title}
            description={activity?.description}
            slug={activity?.slug}
          />
        ))}
      </div>
    </section>
  );
}
