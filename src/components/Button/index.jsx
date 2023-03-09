import "./styles.scss";

export const Button = ({ additionalBtnClass, clickHandler, title }) => {
    return(
        <button
            className={`primary-btn ${additionalBtnClass}`}
            onClick={clickHandler}
        >
            {title}
        </button>
    );
}
