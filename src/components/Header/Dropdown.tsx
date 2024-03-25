import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";

const DropdownItems = ({ dropdownName }: any) => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>("test1");

  const menuItems = [
    {
      label: "test1",
      key: "1",
      slug: "#",
      dropdownItems: [
        { label: "Subitem 1.1", key: "1.1", slug: "#" },
        { label: "Subitem 1.2", key: "1.2", slug: "#" },
      ],
    },
    {
      label: "test2",
      key: "2",
      slug: "#",
      dropdownItems: [
        { label: "Subitem 2.1", key: "2.1", slug: "#" },
        { label: "Subitem 2.2", key: "2.2", slug: "#" },
      ],
    },
    {
      label: "test3",
      key: "3",
      slug: "#",
      dropdownItems: [
        { label: "testtt", key: "2.1", slug: "#" },
        { label: "testtt", key: "2.2", slug: "#" },
      ],
    },
  ];

  const handleMenuItemHover = (menuItem: any) => {
    setActiveMenuItem(menuItem.label);
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          <div className="min-w-80 grid grid-cols-4 space-x-8 p-4 ">
            <div className="flex flex-col space-y-4 col-span-1 w-full">
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.key}
                  onMouseEnter={() => handleMenuItemHover(menuItem)}
                >
                  <Link
                    href={menuItem.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm md:text-base lg:text-lg xl:text-xl hover hover:bg-gray-100 rounded-lg"
                  >
                    {menuItem.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-span-3 w-full">
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.key}
                  className={`grid grid-cols-3 lg:space-4
                   ${menuItem.label === activeMenuItem ? "block" : "hidden"} 
                  `}
                >
                  {menuItem.dropdownItems.map((subItem) => (
                    <div
                      key={subItem.key}
                      className="text-sm md:text-base lg:text-lg"
                    >
                      <Link
                        href={subItem.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Menu>
      }
      placement="bottomLeft"
    >
      <a className="text-primary text-sm md:text-base lg:text-lg font-medium hover:text-primaryYellow cursor-pointer inline-flex items-center">
        {dropdownName} <CaretDownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownItems;
