import { SubCategory } from "@/interface/Dropdown";
import { CaretDownOutlined } from "@ant-design/icons";
import { PiCaretDown } from "react-icons/pi";

import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

const SmDropdown = ({ dropdownName, menuItems, slugroot }: any) => {
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);

  const handleMenuClick = (menuItem: string) => {
    if (visibleMenu === menuItem) {
      setVisibleMenu(null);
    } else {
      setVisibleMenu(menuItem);
    }
  };

  return (
    <Dropdown
      overlay={
        <Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
          {menuItems?.map((menuItem: any) => (
            <div key={menuItem?.id} className="p-2">
              <div
                onClick={() => handleMenuClick(menuItem?.name)}
                className="w-full flex justify-between space-x-1  cursor-pointer items-center"
              >
                {menuItem?.name}{" "}
                {menuItem?.items && menuItem?.items?.length > 0 && (
                  <PiCaretDown />
                )}
              </div>
              {visibleMenu === menuItem?.name && (
                <Menu>
                  {menuItem?.items?.map((subItem: SubCategory) => (
                    <Menu.Item key={subItem?.id}>
                      <Link
                        href={
                          slugroot === "service"
                            ? `/${slugroot}/${subItem?.slug}`
                            : `/${slugroot}/${menuItem?.slug}/${subItem?.slug}`
                        }
                      >
                        {subItem?.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              )}
            </div>
          ))}
          {slugroot === "academics" && (
            <Link href="/faculties">
              <div
                onMouseEnter={() => handleMenuClick("Faculties")}
                className={`flex items-center justify-between w-full px-2 py-2 text-nowrap text-sm md:text-base hover:bg-gray-100 hover:text-primary rounded-lg`}
              >
                <span>Faculties</span>
              </div>
            </Link>
          )}
        </Menu>
      }
      placement="bottomCenter"
      open={Boolean(visibleMenu)}
      onOpenChange={(flag) => setVisibleMenu(flag ? "visible" : null)}
    >
      <div
        className="ant-dropdown-link text-base md:text-lg text-primary
      hover:text-primaryYellow flex space-x-2 items-center cursor-pointer"
      >
        <span className="font-medium">{dropdownName}</span>{" "}
        <span>
          <CaretDownOutlined />
        </span>
      </div>
    </Dropdown>
  );
};

export default SmDropdown;
