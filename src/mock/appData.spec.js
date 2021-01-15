import appData from "./appData";
beforeAll(() => {
    appData.__setMockData({
        foo: "bar",
        subObject: {
            bar: "foo",
        },
    });
});
afterEach(() => {
    jest.clearAllMocks();
});
describe("get", () => {
    test("should return undefined when missing ID", () => {
        expect(appData.get("404")).toEqual(undefined);
        expect(appData.get(null)).toEqual(undefined);
        expect(appData.get(undefined)).toEqual(undefined);
    });
    test("should get non nested values", () => {
        expect(appData.get("foo")).toEqual("bar");
        expect(appData.get("subObject")).toEqual({ bar: "foo" });
    });

    test("should ignore parameters after the first one", () => {
        expect(appData.get("subObject", "bar")).toEqual({ bar: "foo" });
    });
});
