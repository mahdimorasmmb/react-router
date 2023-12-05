import { FC } from "react";
import { NavLink } from "react-router-dom";

export type ListType = {path:string,label:string,end?:boolean}





type Props = {
    listNav:ListType[],
    bg?:string
}

const NavbarDashboard:FC<Props> = ({listNav,bg = 'bg-[#FFF7ED]'}) => {
  return (
    <nav className={`flex  ${bg}`}>
      <ul className=" flex gap-8 ">
        {listNav?.map((item) => (
          <li key={item.label}>
            <NavLink
              className={(props) => {

                if (props.isActive)
                  return "underline text-[#161616] font-bold capitalize";

                return "capitalize text-[#4D4D4D] text-lg font-medium";
              }}
              to={item.path}
              end={item.end}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
