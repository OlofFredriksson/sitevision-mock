let mockData = {};

export function setMockData(key, obj) {
    mockData[key] = obj;
}

export function getMockData(key) {
    return mockData[key] ? mockData[key] : {};
}

export function clearMockData(key = "") {
    if (key && mockData[key]) {
        mockData[key] = {};
    } else {
        mockData = {};
    }
}
