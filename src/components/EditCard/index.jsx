import { InputTextField, Button } from "../index";
import { useNodeContext } from "../../context";

export const EditCard = ({
    title,
    label,
    modalWindowName,
    children
}) => {

    const {
        inputText,
        setInputText,
        isError,
        handleCancelButtonClick
    } = useNodeContext();

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
                    clickHandler={(e) => { handleCancelButtonClick(e, title) }}
                    title="cancel"
                />
                {children}
            </div>
        </>
    );
}
