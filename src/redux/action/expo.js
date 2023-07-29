import { ActiveSearchConsts } from '../constant/expo';

export const addnewActiveSearch = (mode, data) => (
    {
        type: ActiveSearchConsts.STORE_CURRENT_SEARCH,
        payload: {
            mode,
            data,
        },
    }
);

export const  allDataChange = (newVal) => (
    {
        type: ActiveSearchConsts.CHANGE_ALLd_DATA_VAL,
        payload: newVal,
    }
)
