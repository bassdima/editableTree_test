import { useState } from "react";
import { ListButtons } from "../index";
import {
    ExpandMore,
    ExpandLess
} from '@mui/icons-material';
import classNames from "classnames";
import { useNodeContext } from "../../context";
import "./styles.scss";

export const EditableTree = ({
    userId,
    setModalWindowName,
    setItemName,
    nodeList,
    activeId,
    setActiveId,
}) => {

    const { handleHiddenListButtonClick } = useNodeContext();
    const [isVisable, setIsVisable] = useState(false);

    return (
        <>
            {nodeList &&
                <div>
                    <div
                        className={classNames("item-tree", { "item-tree_active": activeId === nodeList.id })}
                        onClick={ () => handleHiddenListButtonClick(setIsVisable, isVisable, nodeList.id) }
                    >
                        {nodeList.children.length > 0 &&
                            <div className="item-tree__chevron">
                                {isVisable ?
                                    <ExpandLess />
                                    :
                                    <ExpandMore />
                                }
                            </div>
                        }
                        <span>
                            {nodeList.name === userId ? "Root" : nodeList.name}
                        </span>
                        {activeId === nodeList.id &&
                            <ListButtons
                                setModalWindowName={setModalWindowName}
                                userId={userId}
                                setItemName={setItemName}
                                nodeList={nodeList}
                            />
                        }
                    </div>
                    <div className={`children-tree ${isVisable ? "children-tree_visble" : "children-tree_hidden"}`}>
                        {nodeList.children.map((explore) => (
                            <EditableTree
                                key={explore.id}
                                nodeList={explore}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                setModalWindowName={setModalWindowName}
                                setItemName={setItemName}
                                userId={userId}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
