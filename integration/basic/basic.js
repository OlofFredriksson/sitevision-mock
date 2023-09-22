/* Just some dummy functions.. */
import properties from "Properties";
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";
import propertyUtil from "PropertyUtil";

export function getPropertyFromCurrentPage(prop) {
    return properties.get(portletContextUtil.getCurrentPage(), prop);
}

export function getNodeId(myNode) {
    return myNode.getIdentifier();
}

export function add(a, b) {
    logUtil.log(a);
    logUtil.log(b);
    return a + b;
}

export function getDummyStringsInJavaList(node) {
    return propertyUtil.getStrings(node, "strings");
}
