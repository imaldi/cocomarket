// To parse this data:
//
//   import { Convert, HistoryListResponse } from "./file";
//
//   const historyListResponse = Convert.toHistoryListResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface HistoryListResponse {
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

    users:               Users;
    address:             Address;
    order_details:       OrderDetail[];
    vendors:             Vendors;
}

export interface Users {
    id:                string;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        Date;
    updated_at:        Date;
    phone:             null;
    profile_picture:   string;
    date_of_birth:     null;
    deleted_at:        null;
    is_active:         number;
    role_id:           number;
}


export interface Address {
    id:              string;
    name:            string;
    latitude:        string;
    longitude:       string;
    address:         string;
    user_id:         string;
    default:         number;
    is_active:       number;
    created_at:      Date;
    updated_at:      Date;
    district:        string;
    city:            string;
    deleted_at:      null;
    google_place_id: string;
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
