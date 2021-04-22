import { add, getPropertyFromCurrentPage } from "./basic";
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";

beforeEach(() => {
    jest.clearAllMocks();
});

test("add should internally call logUtil", () => {
    expect(logUtil.log).toHaveBeenCalledTimes(0);
    expect(add(2, 3)).toEqual(5);
    expect(logUtil.log).toHaveBeenCalledTimes(2);
    expect(logUtil.log).toHaveBeenNthCalledWith(1, 2);
    expect(logUtil.log).toHaveBeenNthCalledWith(2, 3);
});

test("getPropertyFromCurrentPage", () => {
    portletContextUtil.__setMockData({
        getCurrentPage: { URI: "/URI" },
    });
    const myUri = getPropertyFromCurrentPage("URI");
    expect(myUri).toEqual("/URI");
});
