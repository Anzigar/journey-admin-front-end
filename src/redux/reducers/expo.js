import { ActiveSearchConsts } from "../constant/expo";


const activeSearch = {
    mode: 'searchText',
    data: {},
    change: '',
};

const ActiveSearchRed = (state = activeSearch, { type, payload }) => {
    switch (type) {
    case ActiveSearchConsts.STORE_CURRENT_SEARCH:
        return {
            mode: payload.mode,
            data: payload.data,
        };

    case ActiveSearchConsts.CHANGE_ALLd_DATA_VAL:
        return {
            ...state,
            change: payload,
        }

    default:
        return state;
    }
};

export default ActiveSearchRed;
