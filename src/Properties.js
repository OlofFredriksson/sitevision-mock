export default class Properties {
    static get(node) {
        return node ? node.uuid : undefined;
    }
}
