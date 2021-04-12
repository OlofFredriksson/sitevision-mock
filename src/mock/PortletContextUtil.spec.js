import PortletContextUtil from "./PortletContextUtil";

describe("getCurrentPage", () => {
    test("should return null when missing mock data", () => {
        expect(PortletContextUtil.getCurrentPage()).toEqual(null);
    });
    test("should return mock object when data have been defined", () => {
        PortletContextUtil.__setMockData({
            getCurrentPage: { uuid: "id", foo: "bar" },
        });
        expect(PortletContextUtil.getCurrentPage()).toEqual({
            uuid: "id",
            foo: "bar",
        });
    });
});
