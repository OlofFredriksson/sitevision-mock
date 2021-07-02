import Iterator from "./Iterator";
let iterator;
describe("Iterator", () => {
    beforeEach(() => {
        iterator = new Iterator([0, 1, 2]);
    });

    test("should haveNext() on start", () => {
        expect(iterator.hasNext()).toEqual(true);
    });

    test("should not haveNext() if iterator empty", () => {
        iterator = new Iterator([]);
        expect(iterator.hasNext()).toEqual(false);

        iterator = new Iterator(undefined);
        expect(iterator.hasNext()).toEqual(false);

        iterator = new Iterator(null);
        expect(iterator.hasNext()).toEqual(false);
    });

    test("should be able to loop all the items", () => {
        let count = 0;
        while (iterator.hasNext()) {
            const item = iterator.next();
            expect(item).toEqual(count);
            count++;
        }
        expect(count).toEqual(3);
    });
});
