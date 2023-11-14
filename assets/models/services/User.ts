export type Registration = {
    status: boolean,
    message: string
}
export interface Login{
    status: boolean,
    message: string,
    name: string,
    email: string,
}
export interface UserArgs{
    email: string,
    password: string,
}