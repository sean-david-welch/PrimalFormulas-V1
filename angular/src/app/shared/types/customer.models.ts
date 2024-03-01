export interface Address {
    city: string;
    country: string;
    line1: string;
    postal_code: string;
    state: string;
}

export interface Email {
    receipt_email: string;
}

export interface Customer {
    address: Address;
    name: string;
}

export interface ShippingDetails {
    customer: Customer;
    email: Email;
}
