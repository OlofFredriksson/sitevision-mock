import {
    add,
    getDummyStringsInJavaList,
    getPropertyFromCurrentPage,
    getNodeId,
} from "./basic";
import logUtil from "LogUtil";
import portletContextUtil from "PortletContextUtil";
import List from "sitevision-mock/dist/transformers/List";
import { mockNode } from "sitevision-mock/dist/mockNode";

let node;
beforeEach(() => {
    jest.clearAllMocks();
    node = mockNode({
        uuid: "myUUID",
    });
});

test("fetch node id", () => {
    expect(getNodeId(node)).toEqual("myUUID");
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
