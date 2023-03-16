import { modalWindowContent } from "../../constans";
import { useSetIsModalWindowOpen } from "../../context";
import "./styles.scss";

export const ListButtons = ({
    setModalWindowName,
    nodeList,
    userId,
    setItemName
}) => {

    const setIsModalWindowOpen = useSetIsModalWindowOpen();

    return (
        <div className="buttons-wrapper">
            {nodeList.name === userId ?
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
                            setItemName(nodeList.name);
                        }}>
                        {modalWindowContent[item]}
                    </div>
                )}
        </div>
    );
}
