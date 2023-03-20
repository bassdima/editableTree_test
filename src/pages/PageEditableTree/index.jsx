import { EditableTree } from "../../components";
import { useNodeContext } from "../../context";
import { useEffect } from "react";
import "./styles.scss";

export const PageEditableTree = ({
    setModalWindowName,
    userId,
    setItemName
}) => {

    const {
        getAllNodes,
        nodeList,
        activeId,
        setActiveId
    } = useNodeContext();

    useEffect(() => {
        getAllNodes();
    }, [getAllNodes]);



    return (
        <div className="page-tree-wrapper">
            {(userId !== undefined || localStorage.getItem('UUID') !== null) &&
                <EditableTree
                    nodeList={nodeList}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    setModalWindowName={setModalWindowName}
                    userId={userId}
                    setItemName={setItemName}
                />
            }
        </div>
    );
}
