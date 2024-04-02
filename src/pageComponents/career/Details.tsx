import CommonBanner from "@/components/Banner/CommonBanner";
import useFetchData from "@/hooks/useFetchData";
import { IVacancy } from "@/interface/interface";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CareerForm from "./CareerForm";

export default function JobDetail({ data }: any) {
  const router = useRouter();
  const { career_name } = router.query;
  const { fetchedData, refetchData } = useFetchData(`/vacancy/${career_name}`);
  const career: IVacancy = fetchedData;

  useEffect(() => {
    refetchData();
  }, [career_name]);

  return (
    <>
      <CommonBanner
        headerName="Career at NMC"
        imageLink="/images/Banners/Banner2.png"
      />
      <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-4 md:py-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Job Details */}
          <div className="w-full h-full lg:col-span-3 pr-8">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-primary font-semibold mb-4">
              {data?.title}
            </h1>
            <div className="mt-4">
              <p
                className="text-gray-700 text-sm md:text-base text-justify"
                dangerouslySetInnerHTML={{
                  __html: data?.description as string,
                }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="relative w-full h-full lg:col-span-2">
            <CareerForm vacancyId={data?.id} />
          </div>
        </div>
      </section>
    </>
  );
}
