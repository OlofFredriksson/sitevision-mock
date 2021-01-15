import { generateMock } from "../utils";

export default generateMock({
    get: function (node) {
        return node ? node.uuid : undefined;
    },
});
