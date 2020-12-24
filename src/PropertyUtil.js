// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/PropertyUtil.html
export default class PropertyUtil {
    // Gets a Node property from a Node.s
    static getNode(node, property) {
        return node[property];
    }
}
