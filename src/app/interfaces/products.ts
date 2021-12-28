export interface IResponseProduct {
    ok:      boolean;
    message: string;
    data:    IProductData;
}

export interface IProductData {
    products: Product[];
}

export interface Product {
    id:          number;
    name:        string;
    description: string;
    img:         string;
    price:       number;
    created_at:  Date;
    updated_at:  Date;
}
