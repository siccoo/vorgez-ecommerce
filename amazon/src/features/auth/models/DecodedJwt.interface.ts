import { DisplayUser } from "./DisplayUser.interface";

export interface DecodedJwt {
    user: DisplayUser;
    exp: string;
    iat: number
}