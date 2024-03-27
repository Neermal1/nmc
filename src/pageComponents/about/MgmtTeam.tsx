/* eslint-disable @next/next/no-img-element */

const hospitalManagementTeam = [
  {
    name: "Rajendra Thapa",
    profession: "Chief Medical Officer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Rajendra Thapa",
    profession: "Hospital Administrator",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rajendra Thapa",
    profession: "Digital Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Rajendra Thapa",
    profession: "Web Designer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

export default function MgmtTeam() {
  return (
    <section className="py-4 text-center">
      <h2 className="mb-12 text-3xl font-bold">Meet the team</h2>

      <div className="lg:gap-xl-12 grid gap-x-6 grid-cols-2 lg:grid-cols-4">
        {hospitalManagementTeam.map((member, index) => (
          <div key={index} className="mb-12 lg:mb-0">
            <img
              src={member.image}
              alt={`Image of ${member.name}`}
              className="mx-auto mb-4 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]"
            />
            <h5 className="mb-2 text-lg font-bold">{member.name}</h5>
            <p className="mb-2">{member.profession}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
