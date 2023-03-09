import classNames from "classnames";
import "./styles.scss";

export const InputTextField = ({ title, inputText, setInputText, label }) => {
    return (
        <div className="input-container">
            <input
                type="text"
                id={title}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="input-container__field"
            />
            <label
                htmlFor={title}
                className={classNames("input-container__label", {"input-container__label_filled": inputText.length > 0})}
            >
                {label}
            </label>
        </div>
    );
}
