import { useState } from "react";
import { SidebarHeader, SidebarMenu } from "../index";
import "./styles.scss";

export const Sidebar = ({ activeItemName, setActiveItemName }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

    return (
        <div className="sidebar-container">
            <SidebarHeader
                isOpen={sidebarIsOpen}
                setIsOpen={setSidebarIsOpen}
            />
            <SidebarMenu
                sidebarIsOpen={sidebarIsOpen}
                activeItemName={activeItemName}
                setActiveItemName={setActiveItemName}
            />
        </div>
    );
}
