// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/PropertyUtil.html
import { generateMock } from "../utils";

export default generateMock({
    // Gets a Node property from a Node.s
    getNode: function (node, property) {
        return node[property];
    },
});
