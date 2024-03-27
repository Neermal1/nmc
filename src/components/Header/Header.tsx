import FirstNav from "./FirstNav";
import LogoNav from "./LogoNav";
import MainNav from "./MainNav";
import SmallScreenNavbar from "./SmallScreenHeader";

const Header = () => {
  return (
    <>
      <FirstNav />
      <LogoNav />
      <MainNav />
      <SmallScreenNavbar />
    </>
  );
};

export default Header;
