import { AdminConstant } from "../constant/adminConstant";

const initAdminstate = {
    showing_view: 'users',
    showing_type: 'client',
    data: {},
};

const AdminReducer = (state = initAdminstate, { type, payload }) => {
    switch (type) {
    case AdminConstant.CHANGE_SHOWING_SECTION:
        return {
            ...state,
            showing_view: payload,
        }

    case AdminConstant.CHANGE_TYPE_ON_VIEW:
        return {
            ...state,
            showing_type: payload,
        }

    case AdminConstant.ADD_ADMIN_DATA:
        return {
            ...state,
            data: payload,
            // showing_type: payload.admin_type,
        }

    default:
        return state;
    }
}

export default AdminReducer;
