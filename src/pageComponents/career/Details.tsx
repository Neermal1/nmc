// import { Job } from "../../../interface/Job";
// import Form from "./Form";

import { useRouter } from "next/router";
import { jobs } from "./careerData";
import CareerForm from "./CareerForm";

// interface JobDetailProps {
//   career: Job;
//   vacancyId: any;
// }

export default function JobDetail() {
  const router = useRouter();
  const { career_name } = router.query;
  const career = jobs.find((job) => job.slug === career_name);
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-8">
      <section className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        {/* JobDetails */}
        <div className="w-full">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-primary font-semibold mb-4">
            {career?.position}
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
        <div className="w-full">
          <CareerForm vacancyId="1" />
        </div>
      </section>
    </section>
  );
}
