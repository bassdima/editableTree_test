import classNames from 'classnames';
import "./styles.scss";

export const SidebarButton = ({ item, activeItemName, sidebarContent, sidebarIsOpen }) => {
    return (
        <div
            htmlFor={item}
            className={
                classNames(
                    'sidebar-button',
                    { 'sidebar-button_api': item === "API" },
                    { 'sidebar-button_checked': item === activeItemName }
                )
            }
        >
            {sidebarContent[item]}
            <p
                className={classNames('sidebar-button__title',
                    { 'sidebar-button__title_hidden': !sidebarIsOpen })}
            >
                {item}
            </p>
        </div>
    );
}
