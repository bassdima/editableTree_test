import { useState } from "react";
import { SidebarHeader, SidebarMenu } from "../index";
import { useResponsive  } from "../../hooks";
import "./styles.scss";

export const Sidebar = () => {
    const isTablet = useResponsive();
    const [sidebarIsOpen, setSidebarIsOpen] = useState(isTablet);

    return (
        <div className="sidebar-container">
            <SidebarHeader
                isOpen={sidebarIsOpen}
                setIsOpen={setSidebarIsOpen}
            />
            <SidebarMenu
                sidebarIsOpen={sidebarIsOpen}
            />
        </div>
    );
}
