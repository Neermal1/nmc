import { ILayoutProps } from "@/interface/interface";

const DoctorMoreDetailCard = ({ children, title }: ILayoutProps) => {
  return (
    <div className="group">
      <div className="bg-white h-[15vh] group-hover:bg-gradient-to-r  from-[#4874e9] group-hover:text-white group-hover:to-[#3356dd]  rounded-[8px] flex flex-col gap-4 drop-shadow-md w-fit p-6">
        <div className="font-bold">{title}</div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DoctorMoreDetailCard;
