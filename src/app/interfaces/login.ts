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

export interface IUser {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: Date;
    created_at:        Date;
    updated_at:        Date;
}
