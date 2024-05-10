import useFetchData from "@/hooks/useFetchData";
import { IService } from "@/interface/interface";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Link from "next/link";

const MenuItem = ({ href, children }: any) => (
  <Link href={`/service/${href}`}>
    <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
      {children}
    </div>
  </Link>
);

const ServiceDropdown = () => {
  const { fetchedData } = useFetchData("services");
  const menu = (
    <Menu>
      {fetchedData?.map((service: IService) => (
        <MenuItem key={service?.id} href={service?.slug}>
          {service?.name}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Dropdown placement="bottom" overlay={menu}>
      <a
        className="ant-dropdown-link text-primary text-sm md:text-base font-medium hover:text-primaryYellow cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        Services <CaretDownOutlined />
      </a>
    </Dropdown>
  );
};

export default ServiceDropdown;
