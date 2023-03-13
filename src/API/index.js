import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test.vmarmysh.com',
});

export const getNodes = (userId) => {
    return instance
        .post(`/api.user.tree.get?treeName=${userId}`)
}

export const postNode = (userId, activeId, inputText) => {
    return instance
        .post(`/api.user.tree.node.create?treeName=${userId}&parentNodeId=${activeId}&nodeName=${inputText}`)
}

export const renameNode = (userId, activeId, inputText) => {
    return instance
        .post(`/api.user.tree.node.rename?treeName=${userId}&nodeId=${activeId}&newNodeName=${inputText}`)
}

export const deleteNode = (userId, activeId) => {
    return instance
        .post(`/api.user.tree.node.delete?treeName=${userId}&nodeId=${activeId}`)
}
