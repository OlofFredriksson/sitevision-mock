import appData from "./appData";
beforeAll(() => {
    appData.__setMockData({
        foo: {
            uuid: "1.2.3",
            URL: "/url",
            URI: "uri",
            displayName: "a displayname",
        },
        subObject: {
            bar: "foo",
            testObj: {
                key: "value",
            },
        },
        pages: ["foo", "bar"],
        aTextField: "A textfield value",
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

        expect(appData.get("404", "key1")).toEqual(undefined);
        expect(appData.get("404", "key1", "key2")).toEqual(undefined);
    });

    test("should get uuid from object when using one parameter", () => {
        expect(appData.get("foo")).toEqual("1.2.3");
    });

    test("should get the whole object when using one parameter and uuid is missing (i.e Sitevision text field)", () => {
        expect(appData.get("aTextField")).toEqual("A textfield value");
    });

    test("should get value from object when using two parameters", () => {
        expect(appData.get("subObject", "bar")).toEqual("foo");
        expect(appData.get("subObject", "testObj")).toEqual({ key: "value" });
    });

    test("should get sub object from object when using three or more parameters", () => {
        expect(appData.get("foo", "URL", "URI")).toEqual({
            URI: "uri",
            URL: "/url",
            displayName: "a displayname",
            uuid: "1.2.3",
        });
    });
});
describe("getNode", () => {
    test("should return undefined when missing ID", () => {
        expect(appData.getNode("404")).toEqual(undefined);
        expect(appData.getNode(null)).toEqual(undefined);
        expect(appData.getNode(undefined)).toEqual(undefined);
    });

    test("should get object if key exists", () => {
        expect(appData.getNode("foo")).toEqual({
            URI: "uri",
            URL: "/url",
            displayName: "a displayname",
            uuid: "1.2.3",
        });
    });
});

describe("getArray", () => {
    test("should return undefined when missing ID", () => {
        expect(appData.getArray("404")).toEqual(undefined);
        expect(appData.getArray(null)).toEqual(undefined);
        expect(appData.getArray(undefined)).toEqual(undefined);
    });

    test("should get value directly if it is an array", () => {
        expect(appData.getArray("pages")).toEqual(["foo", "bar"]);
    });

    test("should transform value if not an array", () => {
        expect(appData.getArray("aTextField")).toEqual(["A textfield value"]);
    });
});
