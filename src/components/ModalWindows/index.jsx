import {
    MainPopupWindow,
    Button,
    SmallErrorModalWindow
} from "../index";
import { useNodeContext } from "../../context";

export const ModalWindows = ({ modalWindowName, itemName }) => {
    const {
        isModalWindowOpen,
        largeWindowErrorMessage,
        smallWindowErrorMessage,
        isLoading,
        addItem,
        renameItem,
        deleteItem
    } = useNodeContext();

    return (
        <>
            {modalWindowName === "add" && isModalWindowOpen &&
                <MainPopupWindow
                    title="add"
                    label="node name"
                    modalWindowName={modalWindowName}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={(e) => { addItem(e) }}
                        title={modalWindowName}
                    />
                </MainPopupWindow>
            }

            {modalWindowName === "rename" && isModalWindowOpen &&
                <MainPopupWindow
                    title="rename"
                    label="new node name"
                    modalWindowName={modalWindowName}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={(e) => renameItem(e)}
                        title={modalWindowName}
                    />
                </MainPopupWindow>
            }

            {modalWindowName === "delete" && isModalWindowOpen &&
                <MainPopupWindow
                    title="delete"
                    label={`Do you want to delete ${itemName}?`}
                    modalWindowName={modalWindowName}
                    itemName={itemName}
                >
                    <Button
                        additionalBtnClass="delete-btn"
                        clickHandler={(e) => deleteItem(e)}
                        title={modalWindowName}
                    />
                </MainPopupWindow>
            }

            {isLoading &&
                <MainPopupWindow
                    isLoading={isLoading}
                />
            }

            {largeWindowErrorMessage.length > 0 &&
                <MainPopupWindow
                    title={modalWindowName}
                    label={largeWindowErrorMessage}
                />
            }

            {smallWindowErrorMessage.length > 0 &&
                <SmallErrorModalWindow
                    error={smallWindowErrorMessage}
                />
            }
        </>
    );
}
