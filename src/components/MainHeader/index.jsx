import { Link } from 'react-router-dom';
import "./styles.scss";

export const MainHeader = ({ setActiveItemName }) => {
    return (
        <div className="main-header">
            <Link to="/" onClick={() => setActiveItemName("demo")}>
                <img className="back-button" src="./assets/main-header/Back.svg" alt="back-button" />
            </Link>
            <div className="user-info">
                <div className="user-info__logo">g</div>
                <div className="user-info__name">guest</div>
            </div>
        </div>
    );
}
