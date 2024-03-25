import Link from "next/link";
import DropdownItems from "./Dropdown";
import useFetchData from "@/hook/useFetchData";

export default function MainNav() {
  const { fetchedData: DepartmentMenuItems } = useFetchData("departments");
  console.log("Data ayo ki nai:", DepartmentMenuItems);
  return (
    <nav className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-2 lg:py-4 sticky top-0 bg-white z-50 hidden lg:block">
      <div className="flex items-center justify-center">
        <ul className="flex space-x-4 lg:space-x-8">
          <NavItem name="Home" navigateTo="/" />
          <NavItem name="About us" navigateTo="/" />
          <DropdownItems dropdownName="Departments" />
          <DropdownItems dropdownName="Services" />
          <NavItem name="Activities" navigateTo="/" />
          <NavItem name="Research" navigateTo="/" />
          <DropdownItems dropdownName="Academics" />
          <NavItem name="Journal" navigateTo="/" />
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ name, navigateTo }: any) => {
  return (
    <Link
      href={navigateTo}
      className="text-primary text-sm md:text-base lg:text-lg font-medium hover:text-primaryYellow cursor-pointer "
    >
      {name}
    </Link>
  );
};
