import { IButtonProps } from "@/interface/interface";

const Button = ({ data }: IButtonProps) => {
  return (
    <div className="bg-[#BFD2F8] w-fit px-6 py-2 rounded-full transition-all duration-700 hover:bg-[#1F2B6C] hover:text-[#FFDD1C] flex items-center justify-center">
      <div>{data?.name}</div>
    </div>
  );
};

export default Button;
