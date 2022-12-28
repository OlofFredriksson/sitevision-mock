const path = require("path");
import { getMockData, setMockData } from "./setMockData";

/* global jest */
const getMethods = (myObj) => {
    const keysInObj = Object.keys(myObj);
    const functionsInObj = keysInObj.filter(
        (key) => typeof myObj[key] == "function"
    );
    return functionsInObj;
};

export function generateMock(fileName, svObject) {
    const name = path.parse(fileName).name;
    const mock = {
        data: () => getMockData(name),
        __setMockData: function (data) {
            setMockData(name, data);
        },
    };
    getMethods(svObject).forEach((classFunction) => {
        mock[classFunction] = jest.fn(svObject[classFunction]);
    });
    return mock;
}
