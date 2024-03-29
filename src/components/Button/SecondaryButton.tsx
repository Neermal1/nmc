import { IButtonProps } from "@/interface/interface";

const SecondaryButton = ({ data }: IButtonProps) => {
  return (
    <div className="group">
      <div className="bg-[#BFD2F8] transition-all duration-700 w-[100%] rounded-[8px] group-hover:bg-[#1F2B6C] px-6 py-4 lg:text-[22px] text-[16px] group-hover:text-[#FFDD1C] font-semibold flex items-center justify-center">
        {data.name}
      </div>
    </div>
  );
};

export default SecondaryButton;
