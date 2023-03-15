import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test.vmarmysh.com',
});

export const getNodes = (userId, data = null) => {
    return instance.post('/api.user.tree.get',
        data,
        {
            params: { treeName: userId }
        }
    )
}

export const postNode = (userId, activeId, inputText, data = null) => {
    return instance.post('/api.user.tree.node.create',
        data,
        {
            params: {
                treeName: userId,
                parentNodeId: activeId,
                nodeName: inputText
            }
        }
    )
}

export const renameNode = (userId, activeId, inputText, data = null) => {
    return instance.post('/api.user.tree.node.rename',
        data,
        {
            params:
            {
                treeName: userId,
                nodeId: activeId,
                newNodeName: inputText
            }
        }
    )
}

export const deleteNode = (userId, activeId, data = null) => {
    return instance.post('/api.user.tree.node.delete',
        data,
        {
            params: {
                treeName: userId,
                nodeId: activeId
            }
        }
    )
}
