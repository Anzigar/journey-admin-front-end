import { combineReducers } from 'redux';
import PopupReducer from './popupReducer';
import AdminReducer from './AdminReducer';
import OffenceReducer from "./offencesReducer"
import AccidentReducer from './accidentReducer';
import CropReducer from './cropReducer';
import ActiveSearchRed from './expo';
import SessionReducer from './SessionReducer';

const allreducers = combineReducers({
    PopupReducer,
    AdminReducer,
    OffenceReducer,
    AccidentReducer,
    ActiveSearchRed,
    CropReducer,
    SessionReducer,

});

export default allreducers;
