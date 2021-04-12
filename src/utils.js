/* global jest */
const getMethods = (myObj) => {
    const keysInObj = Object.keys(myObj);
    const functionsInObj = keysInObj.filter(
        (key) => typeof myObj[key] == "function"
    );
    return functionsInObj;
};

export function generateMock(svObject) {
    const mock = {
        data: {},
        __setMockData: function (data) {
            this.data = data;
        },
    };
    getMethods(svObject).forEach((classFunction) => {
        mock[classFunction] = jest.fn(svObject[classFunction]);
    });
    return mock;
}
