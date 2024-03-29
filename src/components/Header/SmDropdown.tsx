import { DropdownCategory, SubCategory } from "@/interface/Dropdown";

import { Dropdown, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

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
                  <PiCaretDownBold />
                )}
              </div>
              {visibleMenu === menuItem?.name && (
                <Menu>
                  {menuItem?.items?.map((subItem: SubCategory) => (
                    <Menu.Item key={subItem?.id}>
                      <Link
                        href={`/${slugroot}/${menuItem?.slug}/${subItem?.slug}`}
                      >
                        {subItem?.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </Menu>
      }
      placement="bottomCenter"
      open={Boolean(visibleMenu)}
      onOpenChange={(flag) => setVisibleMenu(flag ? "visible" : null)}
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
