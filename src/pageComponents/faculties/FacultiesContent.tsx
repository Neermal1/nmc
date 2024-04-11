import axiosInstance from "@/axiosInstance/axiosInstance";
import { IDoctor } from "@/interface/interface";
import { useEffect, useState } from "react";
import { FacultyCard } from "./FacultyCard";

export default function FacultiesContent({ academics }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [faculties, setFaculties] = useState<IDoctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await axiosInstance.get(
          `faculty/list/${selectedCategory}`
        );
        setFaculties(response.data);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, [selectedCategory]);

  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="relative lg:w-1/4">
          <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:border p-4 rounded-xl sticky top-32 overflow-x-scroll no-scrollbar">
            <button
              className={`mb-4 px-4 py-2 rounded-md focus:outline-none text-sm md:text-base lg:text-lg font-medium ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-blue-50 text-black"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            {academics?.map((academy: any) => (
              <button
                key={academy?.slug}
                className={`mb-4 px-4 py-2 rounded-md focus:outline-none text-sm md:text-base lg:text-lg font-medium ${
                  selectedCategory === academy?.slug
                    ? "bg-primary text-white"
                    : "bg-blue-50 text-black"
                }`}
                onClick={() => setSelectedCategory(academy?.slug)}
              >
                {academy?.name}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : faculties?.length > 0 ? (
          <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties?.map((faculty: IDoctor) => (
              <FacultyCard key={faculty?.id} professor={faculty} />
            ))}
          </div>
        ) : (
          <p>There are currently no professors in this Field.</p>
        )}
      </div>
    </section>
  );
}
