import { Button } from "../index";
import "./styles.scss";

export const LargeErrorModalWindow = ({ error, setError, title }) => {
    return (
        <div className='error-lg-modal'>
            <div className="card-error-lg">
                <div className="card-error-lg__title">
                    <h6>{title}</h6>
                </div>
                <div className="card-error-lg__message">
                    <p>{error}</p>
                </div>
                <div className="card-error-lg__btn">
                    <Button
                        clickHandler={() => { setError("") }}
                        title="cancel"
                        additionalBtnClass="lg-error-window-btn"
                    />
                </div>
            </div>
        </div>
    );
}
