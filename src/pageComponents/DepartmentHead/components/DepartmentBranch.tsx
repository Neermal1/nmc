import {
  IDepartmentBranch,
  IDepartmentBranchProps,
} from "@/interface/interface";
import Link from "next/link";
import { LuImageOff } from "react-icons/lu";

const DepartmentBranch = ({ branchData }: IDepartmentBranchProps) => {
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 gap-8">
        {branchData?.map((data: IDepartmentBranch, index: any) => {
          return (
            <Link
              href={`/department/${data?.department_category?.slug}/${data?.slug}`}
              key={index}
              className="bg-white border-[1px] group  hover:drop-shadow-lg border-gray-300 px-6 py-3 rounded-[4px]"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-gray-200 group-hover:bg-gradient-to-r group-hover:transition-all group-hover:duration-1000 group-hover:from-[#4874e9] group-hover:to-[#3356dd]  h-[10vh] w-[10vh] rounded-[4px]  flex items-center justify-center">
                  {data?.image.length > 0 ? (
                    <img
                      src={data?.image_link}
                      alt="loading"
                      className="h-[55px] w-[55px] object-contain"
                    />
                  ) : (
                    <div className="">
                      <LuImageOff size={36} className="text-[#1e1e1e]" />
                    </div>
                  )}
                </div>
                <div>{data?.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentBranch;
