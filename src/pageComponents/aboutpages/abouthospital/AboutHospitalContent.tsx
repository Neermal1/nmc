import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";

export default function AboutHospitalContent() {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="px-8 md:px-16 lg:px-32 xl:px-52 py-8 lg:py-16">
      <div className="">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">Introduction</h1>
        <p
          className="text-justify "
          dangerouslySetInnerHTML={{ __html: fetchedData?.introduction }}
        />
      </div>
    </section>
  );
}
