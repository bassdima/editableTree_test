import { EditCard, Loader } from "../index";
import "./styles.scss";

export const MainPopupWindow = ({
    title,
    label,
    inputText,
    setInputText,
    modalWindowName,
    setIsModalWindowOpen,
    clickHandlerCancelBtn,
    isLoading,
    children,
    isError,
    setLargeWindowErrorMessage
}) => {
    return (
        <div className="modal-window">
            <div className="card">
                {isLoading ?
                    <Loader />
                    :
                    <EditCard
                        title={title}
                        label={label}
                        inputText={inputText}
                        setInputText={setInputText}
                        modalWindowName={modalWindowName}
                        setIsModalWindowOpen={setIsModalWindowOpen}
                        clickHandlerCancelBtn={clickHandlerCancelBtn}
                        children={children}
                        isError={isError}
                        setLargeWindowErrorMessage={setLargeWindowErrorMessage}
                    />
                }
            </div>
        </div>
    );
}
