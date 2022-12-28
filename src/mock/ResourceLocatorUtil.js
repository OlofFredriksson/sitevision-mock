import { generateMock } from "../utils";
export default generateMock("ResouceLocatorUtil", {
    getNodeByIdentifier: function (id) {
        return this.data()[id] ? this.data()[id] : null;
    },
});
