import { EditCard, Loader } from "../index";
import "./styles.scss";

export const MainPopupWindow = ({
    title,
    label,
    modalWindowName,
    isLoading,
    children
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
                        modalWindowName={modalWindowName}
                        children={children}
                    />
                }
            </div>
        </div>
    );
}
