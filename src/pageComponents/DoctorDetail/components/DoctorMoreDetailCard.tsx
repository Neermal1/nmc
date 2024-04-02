import { ILayoutProps } from "@/interface/interface";

const DoctorMoreDetailCard = ({ children, title }: ILayoutProps) => {
  return (
    <div className="group">
      <div className="bg-white lg:h-fit h-[18vh]   group-hover:bg-gradient-to-r  from-[#4874e9] group-hover:text-white break-words group-hover:to-[#3356dd]  rounded-[8px] flex flex-col gap-4 drop-shadow-md p-6 ">
        <div className="font-bold">{title}</div>
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default DoctorMoreDetailCard;
