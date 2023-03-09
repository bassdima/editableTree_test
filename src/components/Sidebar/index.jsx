import { useState } from "react";
import { SidebarHeader, SidebarMenu } from "../index";
import "./styles.scss";

export const Sidebar = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);

    return (
        <div className="sidebar-container">
            <SidebarHeader
                isOpen={sidebarIsOpen}
                setIsOpen={setSidebarIsOpen}
            />
            <SidebarMenu
                descriptionIsOpen={descriptionIsOpen}
                setDescriptionIsOpen={setDescriptionIsOpen}
                sidebarIsOpen={sidebarIsOpen}
            />
        </div>
    );
}
