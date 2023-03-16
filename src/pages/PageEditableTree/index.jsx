import { EditableTree } from "../../components";
import {
    useGetAllNodes,
    useNodeList,
    useActiveId,
    useSetActiveId
} from "../../context";
import { useEffect } from "react";
import "./styles.scss";

export const PageEditableTree = ({
    setModalWindowName,
    userId,
    setItemName
}) => {

const getAllNodes = useGetAllNodes();
const nodeList = useNodeList();
const activeId = useActiveId();
const setActiveId = useSetActiveId();

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
