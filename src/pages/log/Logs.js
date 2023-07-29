import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// activate pop on login
import { activatePopup } from '../../redux/action/popupActions';

function Logs() {
    const changeVal = useSelector((state) => state.ActiveSearchRed.change);
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(activatePopup('us_login', {}));
    },[changeVal, dispatch]);
    return (
        <div className="UsLogMainDiv">
            
        </div>
    );
}

export default Logs;