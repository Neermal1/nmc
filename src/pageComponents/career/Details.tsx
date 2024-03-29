import useFetchData from "@/hooks/useFetchData";
import { IVacancy } from "@/interface/interface";
import { useRouter } from "next/router";
import CareerForm from "./CareerForm";

export default function JobDetail() {
  const router = useRouter();
  const { career_name } = router.query;
  const { fetchedData } = useFetchData(`/vacancy/${career_name}`);
  const career: IVacancy = fetchedData;
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-8">
      <section className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16">
        {/* JobDetails */}
        <div className="w-full h-full">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-primary font-semibold mb-4">
            {career?.title}
          </h1>

          <div className="mt-4">
            <p
              className="text-gray-700 text-sm md:text-base text-justify"
              dangerouslySetInnerHTML={{
                __html: career?.description as string,
              }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="w-full h-full flex justify-end">
          <div className="w-full lg:pl-12">
            <CareerForm vacancyId={career?.id} />
          </div>
        </div>
      </section>
    </section>
  );
}
