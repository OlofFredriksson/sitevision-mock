import { mockNode } from "./mockNode";

let node;
describe("mockNode", () => {
    beforeEach(() => {
        node = mockNode({
            nodes: [mockNode(), mockNode()],
        });
    });
    it("should be possible to retrieve mocked node", () => {
        expect(node.uuid).toEqual("uuid");
        expect(node.primaryType).toEqual("primaryType");
    });

    it("getIdentifier", () => {
        expect(node.getIdentifier()).toEqual("uuid");
        expect(node.getIdentifier).toHaveBeenCalledTimes(1);
    });

    it("getUUID", () => {
        expect(node.getUUID()).toEqual("uuid");
        expect(node.getUUID).toHaveBeenCalledTimes(1);
    });

    it("hasNodes", () => {
        expect(node.hasNodes()).toEqual(true);
    });

    it("getNodes", () => {
        const nodes = node.getNodes();

        let i = 0;
        while (nodes.hasNext()) {
            i++;
            nodes.next();
        }
        expect(i).toEqual(2);
    });

    it("setProperty", () => {
        expect(node.foo).toBe(undefined);

        node.setProperty("foo", "bar");
        expect(node.foo).toBe("bar");
    });
});
