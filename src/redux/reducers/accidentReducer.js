import { accidentConst } from "../constant/accidentConstant";

const initaccident = {
    activeAccident: '',
    accident: {},
};

const AccidentReducer = (state = initaccident, { type, payload }) => {
    switch (type) {
    case accidentConst.ADD_ALL_ACCIDENTS_DATA:
        return {
            ...state,
            accident: payload,
        }
    case accidentConst.CHANGE_ON_VIEW_ACCIDENTS:
        return {
            ...state,
            activeAccident: payload,
        }

    default:
        return state;
    }
};

export default AccidentReducer;
