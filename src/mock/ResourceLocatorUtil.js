import { generateMock } from "../utils";
export default generateMock({
    getNodeByIdentifier: function (id) {
        return this.data[id] ? this.data[id] : null;
    },
});
