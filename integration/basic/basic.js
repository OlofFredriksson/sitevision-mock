import properties from "Properties";
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";

export function getPropertyFromCurrentPage(prop) {
    return properties.get(portletContextUtil.getCurrentPage(), prop);
}

export function add(a, b) {
    logUtil.log(a);
    logUtil.log(b);
    return a + b;
}
