import { InputTextField, Button } from "../index";
import { handleCancelButtonClick } from "../../hendlers";
import {
    useInputText,
    useSetInputText,
    useSetLargeWindowErrorMessage,
    useSetIsModalWindowOpen,
    useIsError
} from "../../context";

export const EditCard = ({
    title,
    label,
    modalWindowName,
    children
}) => {

    const setIsModalWindowOpen = useSetIsModalWindowOpen();
    const inputText = useInputText();
    const setInputText = useSetInputText();
    const setLargeWindowErrorMessage = useSetLargeWindowErrorMessage();
    const isError = useIsError();

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
                    clickHandler={(e) => {
                        handleCancelButtonClick(
                            e,
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
