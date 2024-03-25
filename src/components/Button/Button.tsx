import { IButtonProps } from "@/interface/interface";

const Button = ({ data }: IButtonProps) => {
  return (
    <div className="bg-[#BFD2F8] w-fit px-6 py-2 rounded-full flex items-center justify-center">
      <div>{data?.name}</div>
    </div>
  );
};

export default Button;
