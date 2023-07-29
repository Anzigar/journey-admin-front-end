import { sessionType } from "../constant/sessionConst";

const initsession = {
    sessionId: '',
    user: {},
};

const SessionReducer = (state = initsession, { type, payload }) => {
    switch (type) {
    case sessionType.USER_DATA:
        return {
            ...state,
            user: payload,
        }
    case sessionType.USER_SESSION:
        return {
            ...state,
            sId: payload,
        }

    default:
        return state;
    }
};

export default SessionReducer;