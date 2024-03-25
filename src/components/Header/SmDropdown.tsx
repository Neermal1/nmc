import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

const SmDropdown = ({ dropdownName }: any) => {
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);

  const handleMenuClick = (menuItem: string) => {
    if (visibleMenu === menuItem) {
      setVisibleMenu(null);
    } else {
      setVisibleMenu(menuItem);
    }
  };

  const menuItems = [
    {
      label: "test1",
      key: "1",
      dropdownItems: [
        { label: "Subitem 1.1", key: "1.1", slug: "#" },
        { label: "Subitem 1.2", key: "1.2", slug: "#" },
      ],
    },
    {
      label: "test2",
      key: "2",
      dropdownItems: [
        { label: "Subitem 2.1", key: "2.1", slug: "#" },
        { label: "Subitem 2.2", key: "2.2", slug: "#" },
      ],
    },
    {
      label: "test3",
      key: "3",
      dropdownItems: [
        { label: "testtt", key: "2.1", slug: "#" },
        { label: "testtt", key: "2.2", slug: "#" },
      ],
    },
  ];

  return (
    <Dropdown
      overlay={
        <Menu>
          {menuItems.map((menuItem) => (
            <div key={menuItem.key} className="p-2">
              <div
                onClick={() => handleMenuClick(menuItem.key)}
                className="flex space-x-1 cursor-pointer items-center"
              >
                {menuItem.label}{" "}
                {menuItem.dropdownItems &&
                  menuItem.dropdownItems.length > 0 && <PiCaretDownBold />}
              </div>
              {visibleMenu === menuItem.key && (
                <Menu>
                  {menuItem.dropdownItems.map((subItem) => (
                    <Menu.Item key={subItem.key}>
                      <Link href={subItem.slug}>{subItem.label}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </Menu>
      }
      placement="bottomCenter"
      visible={Boolean(visibleMenu)}
      onVisibleChange={(flag) => setVisibleMenu(flag ? "visible" : null)}
    >
      <div
        className="ant-dropdown-link text-base md:text-lg font-medium text-primary
      hover:text-primaryYellow flex space-x-2 items-center cursor-pointer"
      >
        <span>{dropdownName}</span>{" "}
        <span>
          <PiCaretDownBold />
        </span>
      </div>
    </Dropdown>
  );
};

export default SmDropdown;
