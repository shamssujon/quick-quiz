import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ route }) => {
    const { name, path } = route;
    return (
        <NavLink
            className={({ isActive }) =>
                (isActive
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-white/70 hover:text-white") +
                " block p-2 font-semibold uppercase transition"
            }
            to={path}>
            {name}
        </NavLink>
    );
};

export default MenuItem;
