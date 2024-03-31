import useFetchData from "@/hooks/useFetchData";
import { IVacancy } from "@/interface/interface";
import { useRouter } from "next/router";
import CareerForm from "./CareerForm";
import Metatag from "@/utils/Metatag";
import CommonBanner from "@/components/Banner/CommonBanner";

export default function JobDetail() {
  const router = useRouter();
  const { career_name } = router.query;
  const { fetchedData } = useFetchData(`/vacancy/${career_name}`);
  const career: IVacancy = fetchedData;

  return (
    <>
      <Metatag
        heading="NMC"
        subheading="Career"
        description={fetchedData?.meta_description}
        og_image="/images/ogImage/homePage.png"
      />
      <CommonBanner
        headerName="Career at NMC"
        imageLink="/images/Banners/Banner2.png"
      />
      <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Job Details */}
          <div className="w-full h-full col-span-3 pr-8">
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
          <div className="relative w-full h-full col-span-2 ">
            <CareerForm vacancyId={career?.id} />
          </div>
        </div>
      </section>
    </>
  );
}
