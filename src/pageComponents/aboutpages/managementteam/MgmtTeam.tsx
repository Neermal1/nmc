import Loader from "@/components/Loader/Loader";
import useFetchData from "@/hooks/useFetchData";
import { ITeamCategory } from "@/interface/interface";
import { FiMail, FiPhone } from "react-icons/fi";

export default function MgmtTeam() {
  const { fetchedData, loading } = useFetchData("team-member/list");
  if (loading) {
    return <Loader />;
  }

  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-16 text-center">
      <h2 className="mb-4 lg:mb-8 text-3xl font-bold">Meet the team</h2>

      {fetchedData?.map((teamCategory: ITeamCategory, index: number) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold mb-8">
            <span className="pb-2 border-b-4 font-semibold border-primaryYellow">
              {teamCategory.name}
            </span>
          </h3>
          <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamCategory.teams.map((member) => (
              <div key={member.id} className="mb-6">
                <img
                  src={member.image_link}
                  alt={`Image of ${member.name}`}
                  className="mx-auto mb-4 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                />
                <h5 className="mb-1 text-lg font-bold">{member.name}</h5>
                <p className="mb-1 text-primary text-sm md:text-base font-medium">
                  {member.designation}
                </p>
                <div className="flex flex-col items-center space-y-2">
                  {member.email && (
                    <div className="flex items-center space-x-2">
                      <FiMail />
                      <a
                        href={`mailto:${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {member?.email}
                      </a>
                    </div>
                  )}
                  {member.phone && (
                    <div className="flex items-center space-x-2">
                      <FiPhone />
                      <a href={`tel:${member.phone}`}>{member?.phone}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
