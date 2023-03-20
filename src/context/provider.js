import { NodeListContext } from "./context";
import { useNodeList } from "../hooks";

export const ContextProvider = ({ userId, children }) => {
    const {
        nodeList,
        activeId,
        setActiveId,
        inputText,
        setInputText,
        isModalWindowOpen,
        setIsModalWindowOpen,
        largeWindowErrorMessage,
        setLargeWindowErrorMessage,
        smallWindowErrorMessage,
        setSmallWindowErrorMessage,
        isError,
        isLoading,
        getAllNodes,
        addItem,
        renameItem,
        deleteItem,
        handleHiddenListButtonClick,
        handleCancelButtonClick
    } = useNodeList(userId);

    return (
        <NodeListContext.Provider
            value={ {
                nodeList,
                activeId,
                setActiveId,
                inputText,
                setInputText,
                isModalWindowOpen,
                setIsModalWindowOpen,
                largeWindowErrorMessage,
                setLargeWindowErrorMessage,
                smallWindowErrorMessage,
                setSmallWindowErrorMessage,
                isError,
                isLoading,
                getAllNodes,
                addItem,
                renameItem,
                deleteItem,
                handleHiddenListButtonClick,
                handleCancelButtonClick
            } }>
            {children}
        </NodeListContext.Provider>
    );
}
