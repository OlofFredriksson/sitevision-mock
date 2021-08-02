/* Just some dummy functions.. */
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";
import propertyUtil from "@sitevision/api/server/PropertyUtil";
import properties from "@sitevision/api/server/Properties";

export function getPropertyFromCurrentPage(prop) {
    return properties.get(portletContextUtil.getCurrentPage(), prop);
}

export function add(a, b) {
    logUtil.log(a);
    logUtil.log(b);
    return a + b;
}

export function getDummyStringsInJavaList(node) {
    return propertyUtil.getStrings(node, "strings");
}
