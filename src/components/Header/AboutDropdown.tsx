import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Popover } from "antd";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

const MenuItem = ({ href, children }: any) => (
  <Link href={href}>
    <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
      {children}
    </div>
  </Link>
);

const MessageItem = ({ msg }: any) => (
  <Link href={`/about/messages/${msg?.slug}`}>
    <div className="px-2 lg:px-4 py-2 lg:py-3 rounded-lg text-sm lg:text-base hover:bg-gray-100 hover:text-primary">
      Message from {msg?.position}
    </div>
  </Link>
);

const AboutDropdown = () => {
  const { fetchedData } = useFetchData("messages");
  const { fetchedData: extraOption } = useFetchData("nav/team-category");

  const messagesmenu = (
    <div className="!bg-white">
      {fetchedData?.map((msg: any, index: number) => (
        <MessageItem key={index} msg={msg} />
      ))}
    </div>
  );

  const menu = (
    <Menu>
      <MenuItem href="/about/about-hospital">About Hospital</MenuItem>
      <MenuItem href="/about/mission-and-vision">Mission and Vision</MenuItem>

      {extraOption?.map((data: any, index: number) => {
        return (
          <div key={index}>
            <MenuItem href={`/about/${data?.slug}`}>{data?.name}</MenuItem>
          </div>
        );
      })}

      <div className="px-4 py-2 my-2 mx-2 rounded-lg text-base hover:bg-gray-100 hover:text-primary">
        <Popover
          placement="right"
          title=""
          content={messagesmenu}
          trigger={["hover"]}
        >
          <span>Messages from Team</span>
        </Popover>
      </div>
      <MenuItem href="/about/nmc-promoters">NMC Promoters</MenuItem>
      <MenuItem href="/about/nmc-song">NMC Song</MenuItem>
    </Menu>
  );

  return (
    <Dropdown placement="bottom" overlay={menu}>
      <a
        className="ant-dropdown-link text-primary text-sm md:text-base font-medium hover:text-primaryYellow cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        About us <CaretDownOutlined />
      </a>
    </Dropdown>
  );
};

export default AboutDropdown;
