import {
    add,
    getDummyStringsInJavaList,
    getPropertyFromCurrentPage,
} from "./bundledApps";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import logUtil from "@sitevision/api/server/LogUtil";

import List from "../../dist/transformers/List";

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

test("getDummyStringsInJavaList", () => {
    const node = {
        strings: new List([1, 2, 3]),
    };

    const strings = getDummyStringsInJavaList(node);
    expect(strings.size()).toEqual(3);
});
