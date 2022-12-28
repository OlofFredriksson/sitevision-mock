import { getPropertyFromCurrentPage } from "./basic";
import portletContextUtil from "PortletContextUtil";
import { setMockData, clearMockData } from "sitevision-mock/dist/setMockData";

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    clearMockData();
});

test("should be able to define mock data directly on the mocked property", () => {
    portletContextUtil.__setMockData({
        getCurrentPage: { key1: "/URI" },
    });
    expect(getPropertyFromCurrentPage("key1")).toEqual("/URI");
});

test("should be possible to define mock data with helper function", () => {
    setMockData("PortletContextUtil", {
        getCurrentPage: { key2: "/URI" },
    });
    expect(getPropertyFromCurrentPage("key2")).toEqual("/URI");
});
