/* global jest */

import Iterator from "./transformers/Iterator";

/* https://developer.sitevision.se/docs/public-api/node-types */
const defaultNode = {
    uuid: "uuid",
    primaryType: "primaryType",
    mixinType: "mixinType",
    nodes: [],
};

/* https://developer.sitevision.se/webdav/files/apidocs/javax/jcr/Node.html */
export function mockNode(obj) {
    const mockNode = { ...defaultNode, ...obj };
    mockNode.getIdentifier = jest.fn(() => mockNode.uuid);
    mockNode.getUUID = mockNode.getIdentifier;
    mockNode.getNode = (path) => mockNode[path];
    mockNode.getNodes = jest.fn(() => new Iterator(mockNode.nodes));
    mockNode.hasNodes = jest.fn(() => !!mockNode.nodes);

    return mockNode;
}
