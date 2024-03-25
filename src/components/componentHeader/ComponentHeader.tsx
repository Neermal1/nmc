import { IComponentHeaderProps } from "@/interface/interface";

const ComponentHeader = ({ data }: IComponentHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[60%] ">
        <div className="text-[16px] font-semibold text-center">
          {data?.small_title}
        </div>
        <div
          className="lg:text-[36px] text-center text-[28px] font-bold"
          style={{
            color: "var(--primary-color)",
          }}
        >
          {data?.main_title}
        </div>
        <div className="text-[16px] leading-[26px]">{data?.description}</div>
      </div>
    </div>
  );
};

export default ComponentHeader;
