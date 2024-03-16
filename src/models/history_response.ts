export interface HistoryResponse {
    message: string;
    status:  boolean;
    data:    Item[];
}

export interface Item {
    id:                  string;
    code:                string;
    date:                Date;
    status:              string;
    description:         string;
    user_id:             string;
    rating:              null;
    freshshop_vendor_id: string;
    user_coupon_id:      string;
    delivery_cost:       string;
    discount_amount:     string;
    tax_amount:          string;
    payment_method:      string;
    note:                string;
    to_address_id:       string;
    deleted_at:          null;
    other_cost:          string;
    order_details:       OrderDetail[];
    vendors:             Vendors;
}

export interface OrderDetail {
    id:          string;
    order_id:    string;
    price:       string;
    product_id:  string;
    description: string;
    note:        null;
    rating:      null;
    quantity:    number;
    products:    Products;
}

export interface Products {
    id:            string;
    name:          string;
    subtitle:      string;
    price:         string;
    description:   string;
    categories_id: string;
    is_active:     number;
    image:         string;
}

export interface Vendors {
    id:              string;
    name:            string;
    description:     string;
    phone:           string;
    status:          number;
    deleted_at:      null;
    latitude:        string;
    longitude:       string;
    address:         string;
    google_place_id: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toHistoryResponse(json: string): HistoryResponse {
        return cast(JSON.parse(json), r("HistoryResponse"));
    }

    public static historyResponseToJson(value: HistoryResponse): string {
        return JSON.stringify(uncast(value, r("HistoryResponse")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "HistoryResponse": o([
        { json: "message", js: "message", typ: "" },
        { json: "status", js: "status", typ: true },
        { json: "data", js: "data", typ: a(r("Datum")) },
    ], false),
    "Datum": o([
        { json: "id", js: "id", typ: "" },
        { json: "code", js: "code", typ: "" },
        { json: "date", js: "date", typ: Date },
        { json: "status", js: "status", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "user_id", js: "user_id", typ: "" },
        { json: "rating", js: "rating", typ: null },
        { json: "freshshop_vendor_id", js: "freshshop_vendor_id", typ: "" },
        { json: "user_coupon_id", js: "user_coupon_id", typ: "" },
        { json: "delivery_cost", js: "delivery_cost", typ: "" },
        { json: "discount_amount", js: "discount_amount", typ: "" },
        { json: "tax_amount", js: "tax_amount", typ: "" },
        { json: "payment_method", js: "payment_method", typ: "" },
        { json: "note", js: "note", typ: "" },
        { json: "to_address_id", js: "to_address_id", typ: "" },
        { json: "deleted_at", js: "deleted_at", typ: null },
        { json: "other_cost", js: "other_cost", typ: "" },
        { json: "order_details", js: "order_details", typ: a(r("OrderDetail")) },
        { json: "vendors", js: "vendors", typ: r("Vendors") },
    ], false),
    "OrderDetail": o([
        { json: "id", js: "id", typ: "" },
        { json: "order_id", js: "order_id", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "product_id", js: "product_id", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "note", js: "note", typ: null },
        { json: "rating", js: "rating", typ: null },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "products", js: "products", typ: r("Products") },
    ], false),
    "Products": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "categories_id", js: "categories_id", typ: "" },
        { json: "is_active", js: "is_active", typ: 0 },
        { json: "image", js: "image", typ: "" },
    ], false),
    "Vendors": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "status", js: "status", typ: 0 },
        { json: "deleted_at", js: "deleted_at", typ: null },
        { json: "latitude", js: "latitude", typ: "" },
        { json: "longitude", js: "longitude", typ: "" },
        { json: "address", js: "address", typ: "" },
        { json: "google_place_id", js: "google_place_id", typ: "" },
    ], false),
};

