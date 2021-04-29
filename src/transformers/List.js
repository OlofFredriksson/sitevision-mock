/* https://docs.oracle.com/javase/8/docs/api/java/util/List.html */
export default class List {
    constructor(arr) {
        this.arr = arr;
    }

    size() {
        return this.arr.length;
    }

    add(input) {
        this.arr.push(input);
    }

    get(index) {
        return this.arr[index];
    }

    clear() {
        this.arr = [];
        return true;
    }
}
