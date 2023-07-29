import { accidentConst } from "../constant/accidentConstant";

export const addAllAccident = (accident) => (
    {
        type: accidentConst.ADD_ALL_ACCIDENTS_DATA,
        payload: accident,
    }
);

export const changeOnViewAccident = (accidentId) => (
    {
        type: accidentConst.CHANGE_ON_VIEW_ACCIDENTS,
        payload: accidentId,
    }
);