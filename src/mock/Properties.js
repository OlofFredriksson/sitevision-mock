// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/Properties.html
import { generateMock } from "../utils";

export default generateMock({
    get: function (...args) {
        if (args.length === 1 && args[0]) {
            const node = args[0];
            return node.uuid ? node.uuid : null;
        }
        if (args.length >= 2) {
            // No need to return the specific keys
            return args[0];
        }
        return null;
    },
});
