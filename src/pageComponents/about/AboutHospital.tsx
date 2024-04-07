import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";

interface Props {
  estDesc: string;
  //   mgmtDesc: string
}

export default function AboutHospital() {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (loading) {
    return <Loader />;
  } else if (fetchedData) {
    return (
      <section className="py-2 lg:py-4">
        <div>
          <h1 className="text-lg md:text-2xl font-bold">Introduction</h1>
          <p
            className="text-justify "
            dangerouslySetInnerHTML={{ __html: fetchedData?.introduction }}
          />
        </div>
      </section>
    );
  }
}
