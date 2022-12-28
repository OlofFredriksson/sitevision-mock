import { clearMockData, getMockData, setMockData } from "./setMockData";
describe("setMockData", () => {
    it("should be possible to define and read data", () => {
        expect(getMockData("myKey")).toEqual({});
        setMockData("myKey", "foo");
        expect(getMockData("myKey")).toEqual("foo");
    });

    it("should be possible clear mock data", () => {
        setMockData("myKey", "foo");
        expect(getMockData("myKey")).toEqual("foo");
        clearMockData();
        expect(getMockData("myKey")).toEqual({});
    });

    it("should be possible clear mock data for specific key", () => {
        setMockData("myKey", "foo");
        setMockData("anotherKey", "bar");

        expect(getMockData("myKey")).toEqual("foo");
        expect(getMockData("anotherKey")).toEqual("bar");

        clearMockData("anotherKey");

        expect(getMockData("myKey")).toEqual("foo");
        expect(getMockData("anotherKey")).toEqual({});
    });
});
