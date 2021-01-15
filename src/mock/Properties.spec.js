import properties from "./Properties";

describe("get", () => {
    test("should return undefined when missing ID", () => {
        expect(properties.get({})).toEqual(undefined);
        expect(properties.get(null)).toEqual(undefined);
        expect(properties.get(undefined)).toEqual(undefined);
    });
    test("with ID", () => {
        const node = { uuid: "id" };
        expect(properties.get(node)).toEqual("id");
    });
});
