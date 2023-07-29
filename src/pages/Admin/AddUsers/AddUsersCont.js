import React from 'react';
import './addUsersCont.css';
// components
import AddUserForm from './Sections/AddUserForm';


function AddUsersCont() {
    return (
        <div className="AddUsersContMain">
            <div className="UserTopSectionAddUserCont">
                <h3 className="SectionNameAddUserCont">
                    Add New Video
                </h3>
            </div>
            <div className="AddUserContFormHolder">
                <AddUserForm />
            </div>
        </div>
    );
}

export default AddUsersCont;