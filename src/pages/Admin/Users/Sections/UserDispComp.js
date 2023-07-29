import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './userDispComp.css';

import { allDataChange } from '../../../../redux/action/expo';
import { activatePopup } from '../../../../redux/action/popupActions';
import { sendToBackendPost } from '../../../../apiCalls';


function UserDispComp({
    Fname, Lname, policeID,userID, phone, editFun,

}) {
    const dispatch = useDispatch();
    console.log(userID)
    const DeleteUser = async (userID) => {
            const datasend = {
                userID,
            }
            console.log(datasend)
            const ans = await sendToBackendPost('/deleteUser/',datasend);
            if (typeof (ans) === 'object' && ans.state === 'success') {
                dispatch(activatePopup('error', { head: 'info', text: ans.message }));
                dispatch(allDataChange(Math.random()));
            } else if (typeof (ans) === 'object' && ans.state !== 'success') {
                // dispatch popup error
                dispatch(activatePopup('error', { head: 'Error', text: ans.message }));
            } else {
                // dispatch popup error
                dispatch(activatePopup('error', { head: 'Error', text: 'Unknown Server Error' }));
            }
            
            console.log(ans)
    }
    

    return (
        <div className="UserDispCompMain">
            <div className="UserDispContentHolder">
                <div className="userNameSectionUserDispComp">
                    <h3 className="userNameUserDispComp">
                        {
                            `${Fname} ${Lname}`
                        }
                    </h3>
                </div>
                <ul className="UserDetailsListUserDispComp">
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Police Id Number:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                policeID
                            }
                        </div>
                    </li>
                    <li className="UserDetailListUserDispComp">
                        <div className="UserDetailTitleUserDispComp">
                            Phone:
                        </div>
                        <div className="UserDetailValueUserDispComp">
                            {
                                phone
                            }
                        </div>
                    </li>
                    
                </ul>
                <div className="ButtonActsUserDispComp">
                    <button className="UserDispButtons editButtonUserDisp" type="button" onClick={() => editFun()}>
                        <span className="material-symbols-rounded">
                            edit
                        </span>
                    </button>
                    <button className="UserDispButtons" type="button"  onClick={() => DeleteUser(userID)}>
                        <span className="material-symbols-rounded" >
                            delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

UserDispComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    userID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    editFun: PropTypes.func.isRequired,
};

export default UserDispComp;
