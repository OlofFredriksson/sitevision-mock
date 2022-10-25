import resourceLocatorUtil from "./ResourceLocatorUtil";
beforeAll(() => {
    resourceLocatorUtil.__setMockData({
        myNode: {
            uuid: "1.2.3",
            URL: "/url",
            URI: "uri",
            displayName: "a displayname",
        },
        aNode: "value",
    });
});

describe("getNodeByIdentifier", () => {
    it("should return null if node not found", () => {
        expect(resourceLocatorUtil.getNodeByIdentifier("404")).toBeNull();
    });

    it("should return node if node is found in the mock", () => {
        expect(resourceLocatorUtil.getNodeByIdentifier("aNode")).toEqual(
            "value"
        );
        expect(resourceLocatorUtil.getNodeByIdentifier("myNode"))
            .toMatchInlineSnapshot(`
            Object {
              "URI": "uri",
              "URL": "/url",
              "displayName": "a displayname",
              "uuid": "1.2.3",
            }
        `);
    });
});
