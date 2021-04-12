import properties from "./Properties";
let node;
describe("get", () => {
    beforeEach(() => {
        node = {
            uuid: "id",
            URI: "/4.5***.html",
            displayName: "displayName",
        };
    });
    test("should return undefined when missing ID", () => {
        expect(properties.get({})).toEqual(null);
        expect(properties.get(null)).toEqual(null);
        expect(properties.get(undefined)).toEqual(null);
    });

    test("should return ID if only node is passed", () => {
        expect(properties.get(node)).toEqual("id");
    });

    test("should return given parameter if only two parameters is passed", () => {
        expect(properties.get(node, "displayName")).toEqual("displayName");
    });

    test("should return null if  only two parameters is passed but value is missing", () => {
        expect(properties.get(node, "404")).toEqual(null);
    });

    test("should return same object when more than two parameter is used", () => {
        expect(properties.get(node, "URI", "displayName", "URI")).toEqual(node);
    });
});
