import useFetchData from "@/hook/useFetchData";
import { Activity } from "@/interface/interface";
import ActivityCard from "./ActivityCard";

export default function ActivitiesList() {
  const { fetchedData: activities } = useFetchData("activities");
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {activities?.map((activity: Activity) => (
          <ActivityCard
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
