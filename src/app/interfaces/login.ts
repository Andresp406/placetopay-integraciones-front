export interface ISetDataLocalStorage {
    user: IUser;
    'x-token': string;
}

export interface ILogin{
    email:string;
    password:string;
}

export interface IResponseLogin {
    ok:      boolean;
    message: string;
    data:    IDataLogin;
}

export interface IDataLogin {
    user:  IUser;
    token: string;
}

export interface IResponseUserLogued {
    ok:      boolean;
    message: string;
    data:    IUser;
}


export interface IUser {
    id:                number;
    first_name:        string;
    last_name:         string;
    type_document:     string;
    document:          number;
    email:             string;
    email_verified_at: Date;
    created_at:        Date;
    updated_at:        Date;
}

