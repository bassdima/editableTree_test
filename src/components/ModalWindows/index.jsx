import {
    MainPopupWindow,
    Button,
    SmallErrorModalWindow
} from "../index";
import { handleCancelButtonClick } from "../../helpers";
import {
    useIsModalWindowOpen,
    useInputText,
    useSetInputText,
    useSetLargeWindowErrorMessage,
    useSetIsModalWindowOpen,
    useSetSmallWindowErrorMessage,
    useLargeWindowErrorMessage,
    useIsError,
    useSmallWindowErrorMessage,
    useIsLoading,
    useAddItem,
    useRenameItem,
    useDeleteItem,
} from "../../context";

export const ModalWindows = ({ modalWindowName, itemName }) => {
    const isModalWindowOpen = useIsModalWindowOpen();
    const setIsModalWindowOpen = useSetIsModalWindowOpen();
    const inputText = useInputText();
    const setInputText = useSetInputText();
    const largeWindowErrorMessage = useLargeWindowErrorMessage();
    const setLargeWindowErrorMessage = useSetLargeWindowErrorMessage();
    const smallWindowErrorMessage = useSmallWindowErrorMessage();
    const setSmallWindowErrorMessage = useSetSmallWindowErrorMessage();
    const isError = useIsError();
    const isLoading = useIsLoading();
    const addItem = useAddItem();
    const renameItem = useRenameItem();
    const deleteItem = useDeleteItem();

    return (
        <>
            {modalWindowName === "add" && isModalWindowOpen &&
                <MainPopupWindow
                    title="add"
                    label="node name"
                    inputText={inputText}
                    setInputText={setInputText}
                    modalWindowName={modalWindowName}
                    setLargeWindowErrorMessage={setLargeWindowErrorMessage}
                    setIsModalWindowOpen={setIsModalWindowOpen}
                    cancelButtonHandler={handleCancelButtonClick}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={addItem}
                        title={modalWindowName}
                    />
                </MainPopupWindow>
            }

            {modalWindowName === "rename" && isModalWindowOpen &&
                <MainPopupWindow
                    title="rename"
                    label="new node name"
                    inputText={inputText}
                    setInputText={setInputText}
                    modalWindowName={modalWindowName}
                    setLargeWindowErrorMessage={setLargeWindowErrorMessage}
                    setIsModalWindowOpen={setIsModalWindowOpen}
                    cancelButtonHandler={handleCancelButtonClick}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={renameItem}
                        title={modalWindowName}
                    />
                </MainPopupWindow>
            }

            {modalWindowName === "delete" && isModalWindowOpen &&
                <MainPopupWindow
                    title="delete"
                    label={`Do you want to delete ${itemName}?`}
                    modalWindowName={modalWindowName}
                    setLargeWindowErrorMessage={setLargeWindowErrorMessage}
                    setIsModalWindowOpen={setIsModalWindowOpen}
                    itemName={itemName}
                    cancelButtonHandler={handleCancelButtonClick}
                >
                    <Button
                        additionalBtnClass="delete-btn"
                        clickHandler={deleteItem}
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
                    setLargeWindowErrorMessage={setLargeWindowErrorMessage}
                    setIsModalWindowOpen={setIsModalWindowOpen}
                    isError={isError}
                    cancelButtonHandler={handleCancelButtonClick}
                />
            }

            {smallWindowErrorMessage.length > 0 &&
                <SmallErrorModalWindow
                    error={smallWindowErrorMessage}
                    setError={setSmallWindowErrorMessage}
                />
            }
        </>
    );
}
