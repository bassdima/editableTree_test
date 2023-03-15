import { useState } from "react";
import { ListButtons } from "../index";
import {
    ExpandMore,
    ExpandLess
} from '@mui/icons-material';
import classNames from "classnames";
import { treeToogle } from "../../helpers";
import "./styles.scss";

export const EditableTree = ({
    userId,
    setModalWindowName,
    setItemName,
    nodeList,
    activeId,
    setActiveId,
    setIsModalWindowOpen
}) => {

    const [isVisable, setIsVisable] = useState(false);

    return (
        <>
            {nodeList &&
                <div>
                    <div
                        className={classNames("item-tree", { "item-tree_active": activeId === nodeList.id })}
                        onClick={() => { treeToogle(isVisable, setIsVisable, setActiveId, nodeList) }}
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
                                setIsModalWindowOpen={setIsModalWindowOpen}
                                nodeList={nodeList}
                            />
                        }
                    </div>
                    <div style={{ display: isVisable ? "block" : "none", paddingLeft: 15 }}>
                        {nodeList.children.map((explore) => (
                            <EditableTree
                                key={explore.id}
                                nodeList={explore}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                setModalWindowName={setModalWindowName}
                                setIsModalWindowOpen={setIsModalWindowOpen}
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
