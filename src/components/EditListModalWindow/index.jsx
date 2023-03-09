import { InputTextField, Button } from "../index";
import "./styles.scss";

export const EditListModalWindow = ({
    title,
    label,
    inputText,
    setInputText,
    modalWindowName,
    clickHandler,
    setIsModalWindowOpen,
    setNode,
    setIsLoading,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    userId,
    activeId,
}) => {
    return (
        <div className="modal-window">
            <div className="card">
                <div className="card__title">
                    <h6>{title}</h6>
                </div>
                {modalWindowName === "delete" ?
                    <p className="card__delete-info">{label}</p>
                    :
                    <InputTextField
                        title={title}
                        inputText={inputText}
                        setInputText={setInputText}
                        label={label}
                    />
                }
                <div className="card__btns-container">
                    <Button
                        clickHandler={() => {
                            setIsModalWindowOpen(false);
                            if(title !== "delete") setInputText("");
                        }}
                        title="cancel"
                    />
                    <Button
                        additionalBtnClass={title === "delete" ? "delete-btn" : "secondary-btn"}
                        clickHandler={(event) => {
                            clickHandler(
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
                        title={title}
                    />
                </div>
            </div>
        </div>
    );
}
