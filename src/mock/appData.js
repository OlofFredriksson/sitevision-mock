import { generateMock } from "../utils";

export default generateMock({
    data: {},
    __setMockData: function (data) {
        this.data = data;
    },

    getNode: function () {
        return undefined;
    },

    get: function (...args) {
        if (args.length >= 1 && this.data[args[0]]) {
            return this.data[args[0]];
        }

        return undefined;
    },
    getArray: function () {},
});
