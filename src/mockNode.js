import Iterator from "./transformers/Iterator";
import { mockFunctions } from "./utils";

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
    mockNode.getIdentifier = () => mockNode.uuid;
    mockNode.getUUID = mockNode.getIdentifier;
    mockNode.getNode = (path) => mockNode[path];
    mockNode.getNodes = () => new Iterator(mockNode.nodes);
    mockNode.hasNodes = () => !!mockNode.nodes;
    mockNode.setProperty = (property, value) => (mockNode[property] = value);

    return mockFunctions(mockNode);
}
