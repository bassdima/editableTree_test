import { EditableTree } from "../../components";
import "./styles.scss";

export const PageEditableTree = ({
    data,
    activeId,
    setActiveId,
    setModalWindowName,
    setIsModalWindowOpen,
    userId,
    setItemName
}) => {
    return (
        <div className="page-tree-wrapper">
            {(userId !== undefined || localStorage.getItem('UUID') !== null) &&
                <EditableTree
                    data={data}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    setModalWindowName={setModalWindowName}
                    setIsModalWindowOpen={setIsModalWindowOpen}
                    userId={userId}
                    setItemName={setItemName}
                />
            }
        </div>
    );
}
