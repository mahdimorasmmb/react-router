import { Link } from "react-router-dom";

const navList = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/vans",
    label: "Vans",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#FFF7ED]">
      <div className="flex justify-between px-7 py-9">
        <Link to={"/"}>
          <h1 className="text-2xl font-black hover:opacity-70">#VANLIFE</h1>
        </Link>
        <ul className="flex gap-3">
          {navList.map((item) => (
            <li key={item.label}>
              <Link className="hover:underline text-base font-semibold" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
