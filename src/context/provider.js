import { NodeListContext } from "./index";
import { useNodeList } from "../hooks";

export const ContextProvider = ({ userId, children }) => {
    return (
        <NodeListContext.Provider value={useNodeList(userId)}>
            {children}
        </NodeListContext.Provider>
    );
}
