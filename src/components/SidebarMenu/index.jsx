import { sidebarContent } from "../../constans";
import { Fragment } from "react";
import { SidebarButton } from "../index";
import { Link } from 'react-router-dom';
import "./styles.scss";

export const SidebarMenu = ({ sidebarIsOpen, activeItemName, setActiveItemName }) => {
    return (
        <section className="sidebar-menu">
            {Object.keys(sidebarContent).map((item) =>
                <Fragment key={item}>
                    {item !== "API" ?
                        <Link
                            className="sidebar-menu__btn"
                            onClick={() => {setActiveItemName(item)}}
                            to={item === "demo" ? "/" : `/description`}
                        >
                            <SidebarButton
                                item={item}
                                activeItemName={activeItemName}
                                sidebarContent={sidebarContent}
                                sidebarIsOpen={sidebarIsOpen}
                            />
                        </Link>
                        :
                        <a className="sidebar-menu__btn" href="https://test.vmarmysh.com/swagger/user.html">
                            <SidebarButton
                                item={item}
                                activeItemName={activeItemName}
                                sidebarContent={sidebarContent}
                                sidebarIsOpen={sidebarIsOpen}
                            />
                        </a>}
                </Fragment>
            )}
        </section>
    );
}
