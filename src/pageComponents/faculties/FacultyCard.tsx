import { IDoctor } from "@/interface/interface";
import Link from "next/link";

export function FacultyCard({ professor }: { professor: IDoctor }) {
  return (
    <Link href={`/doctor/${professor?.slug}`}>
      <div className="bg-white border items-center rounded-[8px] p-6 flex flex-col gap-4">
        <div className="w-full">
          <img
            src={professor && professor?.image_link}
            alt=""
            className="h-60 w-full object-cover object-top"
          />
        </div>
        <div className="black-color flex flex-col items-center gap-1">
          <div className="text-smlg:text-base text-center font-semibold">
            {professor?.name}
          </div>
          {professor?.designation !== null && (
            <div
              className="text-[16px] font-semibold"
              style={{
                color: "var(--accent-color)",
              }}
            >
              {professor?.designation}
            </div>
          )}
          {professor?.degree !== null && (
            <div
              className="text-[16px] font-semibold"
              style={{
                color: "var(--accent-color)",
              }}
            >
              {professor?.degree}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
