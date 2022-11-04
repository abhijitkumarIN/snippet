import React from "react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
const Navbar = () => {
    const [toggle, Setoggle] = React.useState(false);

    const navlink = [
        {
            name: "Buttons",
            link: "/",
        },
        {
            name: "Tailwind Buttons",
            link: "/tw-buttons",
        },
        {
            name: "Shadow",
            link: "/shadow",
        },
        {
            name: "Input Box",
            link: "/inputs",
        },
        {
            name: "Glassmorphism",
            link: "/glassmorphism",
        },
        {
            name: "Color palettes ",
            link: "/color-palettes",
        },
    ];

    return (
        <React.Fragment>
            <nav className="p-4 bg-[#030b20ce]   text-gray-200">
                <div className="flex justify-between items-center">
                    <div className="flex items-center pl-8">
                        <i className="text-2xl fas fa-campground" />
                        <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
                            hello_universe
                        </h1>
                    </div>
                    <div className="lg:hidden block absolute top-4 right-8">
                        <button
                            aria-label="navigation"
                            type="button"
                            onClick={() => Setoggle(!toggle)}
                            className="lg:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white text-lg font-semibold "
                        >
                            {toggle ? (
                                <span>&times;</span>
                            ) : (
                                <span>&#9776;</span>
                            )}{" "}
                        </button>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="hidden lg:flex">
                            {navlink
                                ? navlink?.map((item, index, arr) => (
                                    <li className="text-lg pr-8 " key={index}>
                                        <span
                                            className="transition duration-300 focus:outline-none focus:text-white focus:underline hover:underline hover:text-white"
                                            style={{ textUnderlineOffset: 8 }}
                                        >
                                            <NavLink
                                                to={item.link}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "text-white underline "
                                                        : ""
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        </span>
                                    </li>
                                ))
                                : ""}
                        </ul>
                    </div>
                    <div className="hidden lg:flex cursor-pointer pr-3" title="Github Link">
                        <IconContext.Provider value={{ color: "white", className: "text-3xl" }}>
                            <span onClick={() => window?.open("https://github.com/lenwoper/snippet")}>
                                <BsGithub />
                            </span>
                        </IconContext.Provider>
                    </div>
                </div>
                {toggle && (
                    <div className=" flex w-full mx-auto py-8 text-center h-[95vh]">
                        <div className="flex flex-col justify-center items-center w-full">
                            {navlink?.map((item, index, arr) => (
                                <span
                                    onClick={() => Setoggle(!toggle)}
                                    key={index}
                                    className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-white focus:underline hover:underline hover:text-white"
                                    style={{ textUnderlineOffset: 8 }}
                                >
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-white underline "
                                                : ""
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </React.Fragment >
    );
};
export default Navbar;
