

export interface Iproduct {
    pName: string;
    pInfo: string;
    pId: string;
    pStatus: "InProgress" | "Dispatched" | "Delivered";
}

export interface Ires<T>{
    msg : string ;
    data : T
}