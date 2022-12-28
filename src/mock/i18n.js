import { generateMock } from "../utils";

export default generateMock(__filename, {
    get: function () {
        return undefined;
    },
});
