import PropertyUtil from "@sitevision/api/server/PropertyUtil";
import Properties from "@sitevision/api/server/Properties";

/* Just some dummy functions.. */
import properties from "Properties";
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";
import propertyUtil from "PropertyUtil";

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
