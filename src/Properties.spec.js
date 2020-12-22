import { get } from "./Properties";

describe("get", () => {
    test("should return undefined when missing ID", () => {
        expect(get({})).toEqual(undefined);
        expect(get(null)).toEqual(undefined);
        expect(get(undefined)).toEqual(undefined);
    });
    test("with ID", () => {
        const node = { uuid: "id" };
        expect(get(node)).toEqual("id");
    });
});
