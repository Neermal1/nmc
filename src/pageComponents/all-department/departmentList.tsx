import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { IDepartment } from "@/interface/interface";
import { useRouter } from "next/router";

const DepartmentCard = ({ icon, name, slug }: any) => {
  const router = useRouter();
  return (
    <div className="p-4 bg-white rounded-lg shadow border border-secondary hover:bg-secondary hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-center  mb-4">
        <img src={icon} alt={name} className="h-12 w-12" />
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center">
        <h3 className="text-xl font-semibold mb-2 text-primary text-center">
          {name}
        </h3>
        <button
          onClick={() => router.push(`/departmenthead/${slug}`)}
          className="text-primary px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-primaryYellow transition duration-300"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

const DepartmentList = () => {
  const { fetchedData: departments, loading } =
    useFetchData("departments/list");
  if (loading) {
    return <Loader />;
  } else if (departments) {
    return (
      <section className="component-padding layout">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {departments?.map((department: IDepartment, index: number) => (
            <DepartmentCard
              key={index}
              icon={department?.icon_link}
              name={department?.name}
              description={department?.description}
              slug={department?.slug}
            />
          ))}
        </div>
      </section>
    );
  }
};

export default DepartmentList;
