// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/PropertyUtil.html
import { generateMock } from "../utils";

/*
 Functions wont transform return value to correct type,
 it is up to consumer to define correct values
*/
export default generateMock({
    getNode: getProperty,
    getString: getProperty,
    getBoolean: getProperty,
    getCalendar: getProperty,
    getInt: getProperty,
    getStringEscaped: getProperty,
    getNestedString: getNestedProperty,
    getNestedBinary: getNestedProperty,
});

function getProperty(node, property, defaultValue = null) {
    if (!node) {
        return defaultValue;
    }
    return node[property] ? node[property] : defaultValue;
}

function getNestedProperty(
    node,
    nodePropertyName,
    property,
    defaultValue = null
) {
    if (!node || !node[nodePropertyName]) {
        return defaultValue;
    }
    return getProperty(node[nodePropertyName], property, defaultValue);
}
