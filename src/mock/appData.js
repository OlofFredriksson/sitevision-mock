import { generateMock } from "../utils";

export default generateMock({
    data: {},
    __setMockData: function (data) {
        this.data = data;
    },

    getNode: function () {
        return undefined;
    },
    /*
        appData is missing api doc so using Properties.get.
        https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/Properties.html
    */
    get: function (...args) {
        if (this.data[args[0]]) {
            const obj = this.data[args[0]];
            if (args.length === 1) {
                return obj.uuid;
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
    getArray: function () {},
});
