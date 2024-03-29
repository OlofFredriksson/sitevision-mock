import { generateMock } from "../utils";

export default generateMock("appData", {
    getNode: function (key) {
        return this.data()[key] ? this.data()[key] : undefined;
    },
    /*
        appData is missing api doc so using Properties.get.
        https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/Properties.html
    */
    get: function (...args) {
        if (this.data()[args[0]]) {
            const obj = this.data()[args[0]];
            if (args.length === 1) {
                return obj.uuid ? obj.uuid : obj;
            }
            if (args.length === 2) {
                return obj[args[1]];
            }

            if (args.length >= 2) {
                // No need to return the specific keys
                return obj;
            }
        }

        return undefined;
    },
    getArray: function (key) {
        const data = this.data()[key];
        if (data) {
            return Array.isArray(data) ? data : [data];
        }
        return undefined;
    },
});
