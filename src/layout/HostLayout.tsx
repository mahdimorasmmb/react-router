import { Outlet } from "react-router-dom";
import NavbarDashboard from "./NavbarDashboard";

const listLink = [
  {
    path: "/host",
    end: true,
    label: "dashboard",
  },
  {
    path: "/host/income",
    label: "income",
  },
  {
    path: "/host/vans",
    label: "vans",
  },
  {
    path: "/host/reviews",
    label: "reviews",
  },
];

const HostLayout = () => {
  return (
    <>
      <div className="bg-inherit  px-9">
        <NavbarDashboard listNav={listLink} />
      </div>

      <Outlet />
    </>
  );
};

export default HostLayout;
