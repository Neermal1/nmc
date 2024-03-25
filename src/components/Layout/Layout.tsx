//interface
import { ILayoutProps } from "@/interface/interface";

//components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
