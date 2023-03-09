import {
    ChevronLeft,
    ChevronRight
} from '@mui/icons-material';
import classNames from 'classnames';
import "./styles.scss";

export const SidebarHeader = ({ isOpen, setIsOpen }) => {
    return (
        <header className="sidebar-header">
            <img
                className={classNames('sidebar-header__logo', { 'sidebar-header__logo_hidden': !isOpen })}
                src="./assets/sidebar-menu/react-logo.svg"
                alt="logo"
            />
            <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                    <ChevronLeft />
                    :
                    <ChevronRight />
                }
            </div>
        </header>
    );
}
