import { FiMail, FiPhone } from "react-icons/fi";

export default function MgmtTeam({ fetchedData }: any) {
  return (
    <section className="py-4 text-center flex flex-col gap-10">
      <h2 className="mb-4 lg:mb-8 text-3xl font-bold">Meet Our Teams</h2>
      <div className="grid lg:grid-cols-3">
        {fetchedData?.teams?.map((teamMember: any, index: number) => (
          <div key={index} className="mb-8">
            <div className="">
              <div>
                <img
                  src={teamMember.image_link}
                  alt={`Image of ${teamMember.name}`}
                  className="mx-auto mb-4 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
                />
                <h5 className="mb-1 text-lg font-bold">{teamMember.name}</h5>
                <p className="mb-1 text-primary text-sm md:text-base font-medium">
                  {teamMember.designation}
                </p>
                <div className="flex flex-col items-center space-y-2">
                  {teamMember.email && (
                    <div className="flex items-center space-x-2">
                      <FiMail />
                      <a
                        href={`mailto:${teamMember.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {teamMember?.email}
                      </a>
                    </div>
                  )}
                  {teamMember.phone && (
                    <div className="flex items-center space-x-2">
                      <FiPhone />
                      <a href={`tel:${teamMember.phone}`}>
                        {teamMember?.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
