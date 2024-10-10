import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import { Logo } from "../assets/icons/Logo";

const navigationItems = [
  {
    title: "Home",
    path: routes.home,
  },
  {
    title: "About",
    path: routes.about,
  },
  {
    title: "Contact",
    path: routes.contact,
  },
];

export const Navigation = () => {
  return (
    <nav className="px-40 fixed top-0 py-6 z-20 bg-white w-full max-w-[1500px]">
      <ul className="flex justify-between items-center">
        <NavLink to={routes.home} className="flex gap-2 ">
          <Logo />
          <p>Fatjon Rental</p>
        </NavLink>

        <div className="flex gap-10 items-center">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className="text-black-100 hover:text-blue-500 "
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </ul>
    </nav>
  );
};
