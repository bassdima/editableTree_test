import { sidebarContent } from "../../constans";
import { Fragment } from "react";
import { SidebarButton } from "../index";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export const SidebarMenu = ({ sidebarIsOpen }) => {
    return (
        <section className="sidebar-menu">
            {Object.keys(sidebarContent).map((item) =>
                <Fragment key={item}>
                    {item !== "API" ?
                        <NavLink
                            className={({ isActive }) =>  isActive ? "sidebar-menu__btn_checked" : "sidebar-menu__btn"}
                            to={item === "demo" ? "/" : `/description`}
                        >
                            <SidebarButton
                                item={item}
                                sidebarContent={sidebarContent}
                                sidebarIsOpen={sidebarIsOpen}
                            />
                        </NavLink>
                        :
                        <a className="sidebar-menu__btn" href="https://test.vmarmysh.com/swagger/user.html">
                            <SidebarButton
                                item={item}
                                sidebarContent={sidebarContent}
                                sidebarIsOpen={sidebarIsOpen}
                            />
                        </a>}
                </Fragment>
            )}
        </section>
    );
}
