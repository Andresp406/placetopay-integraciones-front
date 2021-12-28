export interface IResponseRegister {
    ok:      boolean;
    message: string;
    data:    IDataRegister;
}

export interface IDataRegister {
    user:  IUserRegister;
    token: string;
}

export interface IUserRegister {
    email:         string;
    first_name:    string;
    last_name:     string;
    type_document: string;
    document:      string;
    password:      string;
    password_confirmation:string;
    updated_at?:    Date;
    created_at?:    Date;
    id?:            number;
}
