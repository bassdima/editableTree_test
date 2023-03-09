import {
    MainPopupWindow,
    Button,
    SmallErrorModalWindow
} from "../index";
import { cancelBtnEditList } from "../../helpers";
import {
    postNode,
    renameNode,
    deleteNode
} from '../../API';

export const ModalWindows = ({
    isModalWindowOpen,
    inputText,
    setInputText,
    modalWindowName,
    setLargeWindowErrorMessage,
    setIsModalWindowOpen,
    setNode,
    setIsLoading,
    setIsError,
    setSmallWindowErrorMessage,
    userId,
    activeId,
    largeWindowErrorMessage,
    isError,
    smallWindowErrorMessage,
    itemName,
    isLoading
}) => {
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
                    clickHandlerCancelBtn={cancelBtnEditList}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={(event) => {
                            postNode(
                                event,
                                setNode,
                                setIsLoading,
                                setIsError,
                                setLargeWindowErrorMessage,
                                setSmallWindowErrorMessage,
                                userId,
                                setIsModalWindowOpen,
                                activeId,
                                inputText,
                                setInputText
                            )
                        }}
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
                    clickHandlerCancelBtn={cancelBtnEditList}
                >
                    <Button
                        additionalBtnClass="secondary-btn"
                        clickHandler={(event) => {
                            renameNode(
                                event,
                                setNode,
                                setIsLoading,
                                setIsError,
                                setLargeWindowErrorMessage,
                                setSmallWindowErrorMessage,
                                userId,
                                setIsModalWindowOpen,
                                activeId,
                                inputText,
                                setInputText
                            )
                        }}
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
                    clickHandlerCancelBtn={cancelBtnEditList}
                >
                    <Button
                        additionalBtnClass="delete-btn"
                        clickHandler={(event) => {
                            deleteNode(
                                event,
                                setNode,
                                setIsLoading,
                                setIsError,
                                setLargeWindowErrorMessage,
                                setSmallWindowErrorMessage,
                                userId,
                                setIsModalWindowOpen,
                                activeId
                            )
                        }}
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
                    clickHandlerCancelBtn={cancelBtnEditList}
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
