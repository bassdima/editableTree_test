import { modalWindowContent } from "../../constans";
import "./styles.scss";

export const ListButtons = ({
    setModalWindowName,
    setIsModalWindowOpen,
    data,
    userId,
    setItemName
}) => {
    return (
        <div className="buttons-wrapper">
            {data.name === userId ?
                <div
                    className="primary-list-btn"
                    onClick={() => {
                    setModalWindowName("add");
                    setIsModalWindowOpen(true);
                    }}
                >
                    {modalWindowContent.add}
                </div>
                :
                Object.keys(modalWindowContent).map((item) => 
                <div
                    key={item}
                    className={item === "delete" ? "secondary-list-btn" : "primary-list-btn"}
                    onClick={() => {
                        setModalWindowName(item);
                        setIsModalWindowOpen(true);
                        setItemName(data.name);
                }}>
                    {modalWindowContent[item]}
                </div>
            )}
        </div>
    );
}
