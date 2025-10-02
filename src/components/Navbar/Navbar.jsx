import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    {
      label: "Categories",
      dropdown: [
        { href: "/web-design", label: "Web Design" },
        { href: "/web-dev", label: "Web Development" },
        { href: "/ui-ux", label: "UI/UX Design" },
        { href: "/digital-marketing", label: "Digital Marketing" },
      ],
    },
  ];
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-3 px-5 border-b-1 border-gray-100">
        <div className="flex gap-2 items-center">
          <img src="/logo.png" alt="" />
          <h1 className="text-[#697077] font-semibold">WebCode</h1>
        </div>
        {/* mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        >
          {isMenuOpen ? <IoMdClose /> : <CiMenuFries />}
        </button>
        <ul className="space-x-5   hidden sm:block sm:flex">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li key={index}>
                {/* <details>
                  <summary>{link.label}</summary>
                  <ul className="p-2 ">
                    
                  </ul>
                </details> */}

                <details className="dropdown">
                  <summary>{link.label}</summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {link.dropdown.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink to={subLink.href}>{subLink.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " border-b-3 border-blue-600" : ""
                  }
                  key={index}
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
        <div className="space-x-5 hidden sm:block">
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
          <NavLink to="/pricing" className="btn btn-primary">
            Start Free Trial
          </NavLink>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto p-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.href}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
            <NavLink to="/pricing" className="btn btn-primary">
              Start Free Trial
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
