import { InputTextField, Button } from "../index";

export const EditCard = ({
    title,
    label,
    inputText,
    setInputText,
    modalWindowName,
    setIsModalWindowOpen,
    clickHandlerCancelBtn,
    children,
    isError,
    setLargeWindowErrorMessage
}) => {

    return (
        <>
            <div className="card__title">
                <h6>{title}</h6>
            </div>
            {(modalWindowName === "delete" || isError) ?
                <p className="card__message">{label}</p>
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
                        clickHandlerCancelBtn(
                            setIsModalWindowOpen,
                            title,
                            setInputText,
                            isError,
                            setLargeWindowErrorMessage
                        )
                    }}
                    title="cancel"
                />
                {children}
            </div>
        </>
    );
}
