import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
