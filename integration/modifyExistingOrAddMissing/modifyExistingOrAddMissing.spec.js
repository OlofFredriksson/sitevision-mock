import { getNode, getTextField, getFoo } from "./modifyExistingOrAddMissing";
import appData from "appData";

jest.mock("appData", () => ({
    ...jest.requireActual("appData").default, // Import mock module
    get: jest.fn(() => "foo:bar"), // Modify existing function
    foo: jest.fn(() => "bar:foo"), // Add missing function
}));

beforeEach(() => {
    appData.__setMockData({
        node: { foo: "bar" },
    });
});

test("should get new mock value from modified function", () => {
    expect(getTextField("URI")).toEqual("foo:bar");
});

test("should get new mock value from missing function", () => {
    expect(getFoo("URI")).toEqual("bar:foo");
});

test("should get value from existing, not modified function", () => {
    expect(getNode()).toEqual({ foo: "bar" });
});
