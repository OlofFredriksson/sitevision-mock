// https://developer.sitevision.se/webdav/files/apidocs/senselogic/sitevision/api/context/PortletContextUtil.html
import { generateMock } from "../utils";
export default generateMock("PortletContextUtil", {
    getCurrentPage: function () {
        return this.data().getCurrentPage ? this.data().getCurrentPage : null;
    },
});
