import { clearMockData, getMockData, setMockData } from "./setMockData";
describe("setMockData", () => {
    beforeEach(() => {
        clearMockData();
    });
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

    it("should not give any errors when trying to clear undefined key", () => {
        setMockData("myKey", "foo");
        clearMockData("anotherKey");

        expect(getMockData("myKey")).toEqual("foo");
        expect(getMockData("anotherKey")).toEqual({});
    });
});
