// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/property/PropertyUtil.html
import { generateMock } from "../utils";

/*
 Functions wont transform return value to correct type,
 it is up to consumer to define correct values
*/
export default generateMock({
    getNode: function (...args) {
        return getProperty(...args);
    },
    getString: function (...args) {
        return getProperty(...args);
    },
    getBoolean: function (...args) {
        return getProperty(...args);
    },
    getCalendar: function (...args) {
        return getProperty(...args);
    },
    getInt: function (...args) {
        return getProperty(...args);
    },
    getStringEscaped: function (...args) {
        return getProperty(...args);
    },
    getNestedString: function (...args) {
        return getNestedProperty(...args);
    },
    getNestedBinary: function (...args) {
        return getNestedProperty(...args);
    },
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
