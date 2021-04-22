/* Examples if you need to modify or add missing mock */
import appData from "appData";

export function getNode() {
    return appData.getNode("node");
}

export function getTextField(name) {
    return appData.get(name);
}
export function getFoo(prop) {
    return appData.foo(prop); // this function do not exist in Sitevision, just for demo purpose
}
