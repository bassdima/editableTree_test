import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://test.vmarmysh.com',
});

export const getNodes = (
    setData,
    setIsLoading,
    setIsError,
    setLargeWindowError,
    setSmallWindowError,
    userId
) => {
    const controller = new AbortController();

    setIsLoading(true);
    setIsError(false);

    instance
        .post(`/api.user.tree.get?treeName=${userId}`)
        .then((response) => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((e) => {
            setIsError(true);
            setLargeWindowError(e.response.data.data.message);
            setSmallWindowError(`${e.response.data.data.message} (id=${e.response.data.id})`)
        });

    return () => controller.abort();
}

export const postNode = (
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
    setInputText
) => {
    event.preventDefault();

    setIsLoading(true);
    setIsError(false);

    instance
        .post(`/api.user.tree.node.create?treeName=${userId}&parentNodeId=${activeId}&nodeName=${inputText}`)
        .then(() => {
            getNodes(
                setNode,
                setIsLoading,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                userId
            );
            setIsLoading(false);
            setInputText("");
        })
        .catch((e) => {
            setIsError(true);
            setLargeWindowErrorMessage(e.response.data.data.message);
            setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`);
            setIsLoading(false);
        });
    setIsModalWindowOpen(false);
}

export const renameNode = (
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
    setInputText
) => {
    event.preventDefault();

    setIsLoading(true);
    setIsError(false);

    instance
        .post(`/api.user.tree.node.rename?treeName=${userId}&nodeId=${activeId}&newNodeName=${inputText}`)
        .then(() => {
            getNodes(
                setNode,
                setIsLoading,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                userId
            );
            setIsLoading(false);
            setInputText("");
        })
        .catch((e) => {
            setIsError(true);
            setLargeWindowErrorMessage(e.response.data.data.message);
            setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`);
            setIsLoading(false);
        });
    setIsModalWindowOpen(false);
}

export const deleteNode = (
    event,
    setNode,
    setIsLoading,
    setIsError,
    setLargeWindowErrorMessage,
    setSmallWindowErrorMessage,
    userId,
    setIsModalWindowOpen,
    activeId
) => {

    event.preventDefault();

    setIsLoading(true);
    setIsError(false);

    instance
        .post(`/api.user.tree.node.delete?treeName=${userId}&nodeId=${activeId}`)
        .then(() => {
            getNodes(
                setNode,
                setIsLoading,
                setIsError,
                setLargeWindowErrorMessage,
                setSmallWindowErrorMessage,
                userId
            );
            setIsLoading(false);
        })
        .catch((e) => {
            setIsError(true);
            setLargeWindowErrorMessage(e.response.data.data.message);
            setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`);
            setIsLoading(false);
        });
    setIsModalWindowOpen(false);
}
