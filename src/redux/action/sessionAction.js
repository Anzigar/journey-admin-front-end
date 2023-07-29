import { sessionType } from "../constant/sessionConst";

export const userData  = (user) => (
    {
        type: sessionType.USER_DATA,
        payload: user,
    }
);

export const userSession  = (sId) => (
    {
        type: sessionType.USER_SESSION,
        payload: sId,
    }
);