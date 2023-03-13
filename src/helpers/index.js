export const treeToogle = (
    isVisable,
    setIsVisable,
    setActiveId,
    data
) => {
    setIsVisable(!isVisable);
    setActiveId(data.id);
}

export const cancelBtnEditList = (
    setIsModalWindowOpen,
    title,
    setInputText,
    isError,
    setLargeWindowErrorMessage
) => {
    setIsModalWindowOpen(false);
    if (title !== "delete" && !isError) setInputText("");
    if (isError) setLargeWindowErrorMessage("");
}

const handleError = (
    e,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    setIsLoading
) => {
    setIsError(true);
    setLargeWindowErrorMessage(e.response.data.data.message);
    setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`);
    setIsLoading(false);
}

const handleLoading = (setIsLoading, setIsError) => {
    setIsLoading(true);
    setIsError(false);
}

export const addItem = (
    event,
    setNode,
    setIsLoading,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    userId,
    setIsModalWindowOpen,
    activeId,
    inputText,
    setInputText,
    postNode,
    getNodes
) => {
    event.preventDefault();

    handleLoading(setIsLoading, setIsError);

    postNode(userId, activeId, inputText)
        .then(() => {
            getNodes(userId).then((resonse) => setNode(resonse.data));
            setIsLoading(false);
            setInputText("");
        })
        .catch((e) => {
            handleError(
                e,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                setIsLoading
            );
        })
    setIsModalWindowOpen(false);
}

export const renameItem = (
    event,
    setNode,
    setIsLoading,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    userId,
    setIsModalWindowOpen,
    activeId,
    inputText,
    setInputText,
    renameNode,
    getNodes
) => {
    event.preventDefault();

    handleLoading(setIsLoading, setIsError);

    renameNode(userId, activeId, inputText)
        .then(() => {
            getNodes(userId).then((resonse) => setNode(resonse.data));
            setIsLoading(false);
            setInputText("");
        })
        .catch((e) => {
            handleError(
                e,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                setIsLoading
            );
        });

    setIsModalWindowOpen(false);
}

export const deleteItem = (
    event,
    setNode,
    setIsLoading,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    userId,
    setIsModalWindowOpen,
    activeId,
    deleteNode,
    getNodes
) => {

    event.preventDefault();

    handleLoading(setIsLoading, setIsError);

    deleteNode(userId, activeId)
        .then(() => {
            getNodes(userId).then((resonse) => setNode(resonse.data));
            setIsLoading(false);
        })
        .catch((e) => {
            handleError(
                e,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                setIsLoading
            );
        });
    setIsModalWindowOpen(false);
}
