export interface IResponsePlacetopay {
    ok:      boolean;
    message: string;
    data:    IDataPlacetopay;
}

export interface IDataPlacetopay {
    product:     IProductPlacetopay;
    amount:      string;
    total_price: number;
}

export interface IProductPlacetopay {
    id:          number;
    name:        string;
    description: string;
    img:         string;
    price:       number;
    created_at:  Date;
    updated_at:  Date;
}
