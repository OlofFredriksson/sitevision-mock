import properties from "./Properties";

describe("get", () => {
    test("should return undefined when missing ID", () => {
        expect(properties.get({})).toEqual(null);
        expect(properties.get(null)).toEqual(null);
        expect(properties.get(undefined)).toEqual(null);
    });
    test("with ID", () => {
        const node = { uuid: "id" };
        expect(properties.get(node)).toEqual("id");
    });

    test("should return same object when more than one parameter is used", () => {
        const node = { uuid: "id", URI: "/4.5***.html" };
        expect(properties.get(node, "URI", "displayName")).toEqual(node);
    });
});
