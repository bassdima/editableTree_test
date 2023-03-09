import { sidebarContent } from "../../constans";
import { Fragment } from "react";
import classNames from 'classnames';
import { descriptionToggle } from "../../helpers";
import { DescriptionSubMenu, DescriptionChevron } from "../index";
import "./styles.scss";

export const SidebarMenu = ({descriptionIsOpen, setDescriptionIsOpen, sidebarIsOpen}) => {
    return (
        <section className="sidebar-menu">
            {Object.keys(sidebarContent).map((item) =>
                <Fragment key={item}>
                    <a
                        className="sidebar-menu__btn"
                        href={`/${item}`}
                        onClick={(e) => descriptionToggle(e, descriptionIsOpen, setDescriptionIsOpen)}
                    >
                        <input
                            type="radio"
                            name="menu-btn"
                            id={item}
                            className="sidebar-menu__radio"
                            defaultChecked={item === "demo"}
                        />
                        <label
                            htmlFor={item}
                            className={classNames('sidebar-menu__content', { 'sidebar-menu__content_api': item === "API" })}
                        >
                            {sidebarContent[item]}
                            <p
                                className={classNames('sidebar-menu__content-title',
                                    { 'sidebar-menu__content-title_hidden': !sidebarIsOpen })}
                            >
                                {item}
                            </p>
                            <DescriptionChevron
                                btnName={item}
                                descriptionIsOpen={descriptionIsOpen}
                                sidebarIsOpen={sidebarIsOpen}
                            />
                        </label>
                    </a>
                    <DescriptionSubMenu
                        btnName={item}
                        descriptionIsOpen={descriptionIsOpen}
                        sidebarIsOpen={sidebarIsOpen}
                    />
                </Fragment>
            )}
        </section>
    );
}