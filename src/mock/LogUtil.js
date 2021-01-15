/* No need to print out anything in the test cases */
import { generateMock } from "../utils";

export default generateMock({
    log: function () {
        return undefined;
    },

    warn: function () {
        return undefined;
    },

    error: function () {
        return undefined;
    },

    trace: function () {
        return undefined;
    },

    debug: function () {
        return undefined;
    },

    info: function () {
        return undefined;
    },
});
