import { descriptionSubMenuContent } from "../../constans";
import "./styles.scss";

export const DescriptionSubMenu = ({ btnName, descriptionIsOpen, sidebarIsOpen }) => {
    return (
        <>
            {(btnName === "description" && descriptionIsOpen) &&
                <div className="description-submenu">
                    {descriptionSubMenuContent.map((item) =>
                        <a
                            key={item}
                            className="description-submenu__link"
                            href={`/description/${item}`}
                        >
                            <input
                                className="description-submenu__radio"
                                type="radio"
                                id={item}
                                name="radio-description"
                                defaultChecked={item === "frontend"}
                            />
                            <label
                                className="description-submenu__item-title"
                                htmlFor={item}
                            >
                                {!sidebarIsOpen ? item.substring(0, 1) : item}
                            </label>
                        </a>
                    )}
                </div>
            }
        </>
    );
}
