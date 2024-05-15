import { IDoctor } from "@/interface/interface";
import Link from "next/link";

export default function Professors({ professors }: any) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {professors?.map((professor: any, index: number) => (
          <Link
          href={`/doctor/${professor?.slug}`}
          key={index}
          className="bg-white drop-shadow-md items-center rounded-[8px] p-6 flex flex-col gap-4"
        >
          <div>
            <img src={professor && professor?.image_link} alt="" />
          </div>
          <div className="black-color flex flex-col items-center gap-1">
            <div className="text-[18px]">{professor?.title}</div>
            <div className="text-[16px] text-center font-semibold">
              {professor?.name}
            </div>
            {professor?.designation !== null && (
              <div
                className="text-[16px] text-center font-semibold"
                style={{
                  color: "var(--accent-color)",
                }}
              >
                {professor?.designation}
              </div>
            )}

            {professor?.degree !== null && (
              <div
                className="text-[16px] text-center font-semibold"
                style={{
                  color: "var(--accent-color)",
                }}
              >
                {professor?.degree}
              </div>
            )}
          </div>
        </Link>
        ))}
      </div>
    </section>
  );
}
