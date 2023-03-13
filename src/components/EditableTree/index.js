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
    data,
    activeId,
    setActiveId,
    setModalWindowName,
    setIsModalWindowOpen,
    userId,
    setItemName
}) => {

    const [isVisable, setIsVisable] = useState(false);

    return (
        <>
            {data &&
                <div>
                    <div
                        className={classNames("item-tree", { "item-tree_active": activeId === data.id })}
                        onClick={() => { treeToogle(isVisable, setIsVisable, setActiveId, data) }}
                    >
                        {data.children.length > 0 &&
                            <div className="item-tree__chevron">
                                {isVisable ?
                                    <ExpandLess />
                                    :
                                    <ExpandMore />
                                }
                            </div>
                        }
                        <span>
                            {data.name === userId ? "Root" : data.name}
                        </span>
                        {activeId === data.id &&
                            <ListButtons
                                setModalWindowName={setModalWindowName}
                                setIsModalWindowOpen={setIsModalWindowOpen}
                                data={data}
                                userId={userId}
                                setItemName={setItemName}
                            />
                        }
                    </div>
                    <div style={{ display: isVisable ? "block" : "none", paddingLeft: 15 }}>
                        {data.children.map((explore) => (
                            <EditableTree
                                key={explore.id}
                                data={explore}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                setModalWindowName={setModalWindowName}
                                setIsModalWindowOpen={setIsModalWindowOpen}
                                setItemName={setItemName}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
