import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserDispComp from './UserDispComp';
import UserEditComp from './UserEditComp';


function UserComp({
    Fname, Lname, policeID, phone,password, uid
}) {
    const [editState, setEditState] = useState(false);
    const activateEdit = () => {
        setEditState(true);
    }
    const deactivateEdit = () => {
        setEditState(false);
    }
    return (
        <div className="UserCompMainDiv">
            <div className="userInfoDispSectionUserComp" style={editState ? { display: 'none' } : {}}>
                <UserDispComp
                    userID={uid}
                    Fname={Fname}
                    Lname={Lname}
                    policeID={policeID}
                    phone={phone}
                    password={password}
                    editFun={activateEdit}
                />
            </div>
            <div className="userInfoEditSectionUserComp" style={editState ? {} :  { display: 'none' } }>
                <UserEditComp
                    userID={uid}
                    Fname={Fname}
                    Lname={Lname}
                    policeID={policeID}
                    phone={phone}
                    password={password}
                    dispFun={deactivateEdit}
                />
            </div>
        </div>
    );
}

UserComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    policeID: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    password: PropTypes.string.isRequired,
    uid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default UserComp;
