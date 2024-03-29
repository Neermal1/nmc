import { IComponentHeaderProps } from "@/interface/interface";

const ComponentHeader = ({ data }: IComponentHeaderProps) => {
  return (
    <div className=" ">
      <div className=" ">
        <div className="text-[16px] font-semibold text-[#159EEC]">
          {data?.small_title}
        </div>
        <div
          className="lg:text-[36px]  text-[28px] font-bold"
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
