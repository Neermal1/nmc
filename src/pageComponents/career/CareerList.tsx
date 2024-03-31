import { useRouter } from "next/router";
import useFetchData from "@/hooks/useFetchData";
import { IVacancy } from "@/interface/interface";

export default function CareerList() {
  const { fetchedData: jobs } = useFetchData("vacancies");
  const router = useRouter();

  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <h1 className="text-3xl lg:text-4xl font-semibold text-primary mb-8">
        Open Positions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs?.map((job: IVacancy, index: number) => (
          <div
            key={index}
            className="bg-white border border-primary rounded-lg overflow-hidden"
          >
            <div className="px-6 py-6">
              <h2 className="text-xl font-semibold text-primary mb-4 md:mb-6">
                {job?.title}
              </h2>
              {/* <p className="text-gray-600 mb-4 md:mb-6">{job.department}</p> */}

              <div className="flex items-center space-x-4 text-gray-500 mb-4 md:mb-6">
                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs lg:text-sm">
                  No. of vacancies: {job?.no_of_opening}
                </div>
                <div className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs lg:text-sm">
                  {job?.type}
                </div>
              </div>

              <div className="flex justify-between space-x-4 text-gray-500 mb-4">
                {/* <div className="flex flex-col">
                  <span className="font-semibold">Published:</span>{" "}
                  {job?.}
                </div> */}
                <div className="flex flex-col">
                  <span className="font-semibold">Deadline:</span>{" "}
                  {job?.expire_at}
                </div>
              </div>

              <div className="w-full">
                <button
                  className="w-full bg-primary text-white hover:text-primaryYellow transition duration-300 py-2 px-4 rounded-lg hover:bg-primaryDark"
                  onClick={() => router.push(`/career/${job?.slug}`)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
