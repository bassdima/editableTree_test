import { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import {
    getNodes,
    postNode,
    renameNode,
    deleteNode
} from "../API";

export const useUserId = () => {
    const [userId, setUserId] = useState("");
    const UUID = uuid();
    const savedUserId = localStorage.getItem('UUID');

    useEffect(() => {
        if (!savedUserId) localStorage.setItem('UUID', UUID);
        setUserId(savedUserId);
    }, [UUID, savedUserId]);

    return userId;
}

export const useResponsive = () => {
    const isTablet = useMediaQuery({ query: '(min-width: 726px)' });

    return isTablet;
}

export const useNodeList = (userId) => {
    const [nodeList, setNodeList] = useState("");
    const [activeId, setActiveId] = useState(null);
    const [inputText, setInputText] = useState("");
    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
    const [largeWindowErrorMessage, setLargeWindowErrorMessage] = useState("");
    const [smallWindowErrorMessage, setSmallWindowErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleError = (e) => {
        setIsError(true);
        setLargeWindowErrorMessage(e.response.data.data.message);
        setSmallWindowErrorMessage(`${e.response.data.data.message} (id=${e.response.data.id})`);
        setIsLoading(false);
    }

    const handleLoading = () => {
        setIsLoading(true);
        setIsError(false);
    }

    const getAllNodes = useCallback(() => {
        handleLoading();
        getNodes(userId)
            .then((resonse) => {
                setNodeList(resonse.data);
                setIsLoading(false);
            })
            .catch((e) => {
                handleError(e);
            });
    }, [userId])

    const addItem = useCallback((e) => {
        e.preventDefault();
        postNode(userId, activeId, inputText)
            .then(() => {
                getAllNodes();
                setInputText("");
            })
            .catch((e) => {
                handleError(e);
            });

        setIsModalWindowOpen(false);
    }, [activeId, getAllNodes, inputText, userId])

    const renameItem = useCallback((e) => {
        e.preventDefault();
        renameNode(userId, activeId, inputText)
            .then(() => {
                getAllNodes();
                setInputText("");
            })
            .catch((e) => {
                handleError(e);
            });

        setIsModalWindowOpen(false);
    }, [activeId, getAllNodes, inputText, userId])

    const deleteItem = useCallback((e) => {
        e.preventDefault();
        deleteNode(userId, activeId)
            .then(() => {
                getAllNodes();
            })
            .catch((e) => {
                handleError(e);
            });

        setIsModalWindowOpen(false);
    }, [activeId, getAllNodes, userId]);

    return {
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
        deleteItem
    }
}
