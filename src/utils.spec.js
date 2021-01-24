import { generateMock } from "./utils";

let mock;
describe("generateMock", () => {
    beforeEach(() => {
        mock = generateMock({
            function1: function () {
                return "A string";
            },
            function2: function () {
                return null;
            },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return imeplemented values from functions", () => {
        expect(mock.function1()).toEqual("A string");
        expect(mock.function2()).toEqual(null);
    });

    it("should be wrapped jest functions", () => {
        mock.function1();

        mock.function2();
        mock.function2();

        expect(mock.function1).toHaveBeenCalledTimes(1);
        expect(mock.function2).toHaveBeenCalledTimes(2);
    });

    it("should be possible to add classes afterwards", () => {
        expect(mock.myNewFunc).toBeUndefined();
        mock.myNewFunc = jest.fn().mockImplementation(() => "default");
        mock.myNewFunc();

        expect(mock.myNewFunc).toHaveBeenCalledTimes(1);
    });
});
