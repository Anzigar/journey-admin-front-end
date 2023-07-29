import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import './appMain.css';
import Popup from './subPages/Popups/Popup';
import { userData } from './redux/action/sessionAction';

// static function
import { sendToBackendGet } from './apiCalls';

function AppMain() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [setUserInfo] = useState(null);
    const getUser = async () => {
        const res = await sendToBackendGet('/admin');
        if (res.valid) {
            setUserInfo(res.user);
            dispatch(userData(res.user))
        } else {
            navigate('/');
        }

    }
    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const getAllData = async () => {
    //     const DataUs = await sendToBackendGet('/getdata');
    //     console.log(DataUs);
    //     if (typeof (DataUs.state) !== 'undefined' && DataUs.state !== 'success') {
    //         console.log(DataUs);
    //         if (DataUs.state === 'not login') {
    //             navigate('/');
    //         }
    //         return 0;
    //     }
    // }

    // useEffect(() => {
    //     getAllData();
    // }, []);

    const popupState = useSelector((state) => state.PopupReducer.state);
    return (
        <div className="AppMain">
            <Outlet />
            <div className="PopUpHolderDiv" style={popupState ? { display: 'flex' } : {}}>
                <Popup />
            </div>
        </div>
    );
}

export default AppMain;