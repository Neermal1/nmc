import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Link from "next/link";

const MenuItem = ({ href, children }: any) => (
  <Link href={href}>
    <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
      {children}
    </div>
  </Link>
);

const MediaDropdown = () => {
  const menu = (
    <Menu>
      <MenuItem href="/gallery">Gallery</MenuItem>
      <MenuItem href="/facilities">Facilities</MenuItem>
      <MenuItem href="/activities">Activities</MenuItem>
      <MenuItem href="/research">Research</MenuItem>
    </Menu>
  );

  return (
    <Dropdown placement="bottom" overlay={menu}>
      <a
        className="ant-dropdown-link text-primary text-sm md:text-base font-medium hover:text-primaryYellow cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        Media <CaretDownOutlined />
      </a>
    </Dropdown>
  );
};

export default MediaDropdown;
