interface Data {
    id: string;
    customer: string;
    origin: string;
    destination: string,
    status: string;
    price: number;
    shipmentDate: string;
    arrivalDate: string;
    assignee: string;
    paymentMode: string;
    trackingId: string;
    shippingMode: string;
}

export type { Data };