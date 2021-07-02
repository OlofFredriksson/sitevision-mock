/* https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html */
export default class Iterator {
    constructor(arr) {
        this.arr = arr;
        this.position = 0;
    }

    next() {
        if (
            this.arr[this.position] === undefined ||
            this.arr[this.position] === null
        ) {
            throw new Error("NoSuchElementException");
        }
        this.position++;
        return this.arr[this.position - 1];
    }

    hasNext() {
        if (this.arr && this.position < this.arr.length) {
            return true;
        }
        return false;
    }
}
