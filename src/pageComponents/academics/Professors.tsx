import { IDoctor } from "@/interface/interface";
import Link from "next/link";

export default function Professors({ professors }: any) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professors?.map((professor: IDoctor) => (
          <Link href={`/doctor/${professor?.slug}`} key={professor?.id}>
            <div className="cursor-pointer p-4">
              <div className="flex items-center justify-center">
                <img
                  src={professor?.image_link}
                  alt={`Image of ${professor?.name}`}
                  className="w-60 h-60 object-cover object-top mb-4 rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {professor?.name}
              </h3>
              <p className="text-gray-600 text-center">
                {professor?.designation}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
