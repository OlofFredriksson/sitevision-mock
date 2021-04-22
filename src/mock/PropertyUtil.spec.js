import propertyUtil from "./PropertyUtil";

let node;

beforeAll(() => {
    node = {
        property: "foo:bar", // Type is not relevant since mock dont transform the return value
        nestedProperty: {
            property: "foo:bar", // Type is not relevant since mock dont transform the return value
        },
    };
});

describe("PropertyUtil", () => {
    // Functions that internal use getProperty();
    describe("non nested property", () => {
        const functions = [
            "getNode",
            "getString",
            "getBoolean",
            "getCalendar",
            "getInt",
            "getStrings",
            "getStringEscaped",
        ];

        test.each(functions)(
            "%s should return null when missing ID or parameters is missing",
            (fn) => {
                expect(propertyUtil[fn]({})).toEqual(null);
                expect(propertyUtil[fn](null, null)).toEqual(null);
                expect(propertyUtil[fn](undefined, undefined)).toEqual(null);
            }
        );
        test.each(functions)(
            "%s should return custom default value if data not found",
            (fn) => {
                expect(propertyUtil[fn](undefined, undefined, "foo")).toEqual(
                    "foo"
                );
            }
        );

        test.each(functions)(
            "%s should return null when missing given property",
            (fn) => {
                expect(propertyUtil[fn](node, "missingProperty")).toEqual(null);
            }
        );

        test.each(functions)(
            "%s should return actual value when found",
            (fn) => {
                expect(propertyUtil[fn](node, "property")).toEqual("foo:bar");
            }
        );
    });

    // Functions that internal use getNestedProperty();
    describe("getNestedProperty", () => {
        const functions = ["getNestedString", "getNestedBinary"];

        test.each(functions)(
            "%s should return null when missing ID or parameters is missing",
            (fn) => {
                expect(propertyUtil[fn]({})).toEqual(null);
                expect(propertyUtil[fn](null, null)).toEqual(null);
                expect(propertyUtil[fn](undefined, undefined)).toEqual(null);
            }
        );
        test.each(functions)(
            "%s should return custom default value if data not found",
            (fn) => {
                expect(
                    propertyUtil[fn](undefined, undefined, undefined, "foo")
                ).toEqual("foo");
            }
        );

        test.each(functions)(
            "%s should return null when missing given property",
            (fn) => {
                expect(
                    propertyUtil[fn](node, "missingProperty", "property")
                ).toEqual(null);
            }
        );

        test.each(functions)(
            "%s should return actual value when found",
            (fn) => {
                expect(
                    propertyUtil[fn](node, "nestedProperty", "property")
                ).toEqual("foo:bar");
            }
        );
    });
});
