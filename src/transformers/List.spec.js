import List from "./List";
let list;
describe("List", () => {
    beforeEach(() => {
        list = new List([1, 2, 3]);
    });

    test("should return size", () => {
        expect(list.size()).toEqual(3);
    });

    test("should be able to add items", () => {
        list.add(4);
        expect(list.get(3)).toEqual(4);
    });

    test("should be able to clear list", () => {
        list.clear();
        expect(list.size()).toEqual(0);
    });
});
