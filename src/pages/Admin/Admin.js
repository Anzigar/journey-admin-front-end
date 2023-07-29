import React from 'react';
import { useSelector } from 'react-redux';
import './admin.css';
// static  Data
import { AdminFunctions } from '../../sharedFunctions/adminFunctions';
import SideBarCont from './SideBar/SideBarCont';

function Admin() {
    const AdminState = useSelector((state) => state.AdminReducer);
    
    return (
        <div className="AdminMainDiv">
            <div className="AdminContentHolder">
                <div className="AdminPicSideBarHolder">
                    <SideBarCont />
                </div>
                <div className="AdminMobSideBarPullButtnHolder">
                    <button className="AdminMobSideBarPullButtn" type="button">
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                </div>
                <div className="AdminMobSiderBarHolder">
                    <SideBarCont />
                </div>
                <div className="ActionsContentHolderAdmin">
                    {
                        AdminFunctions.map((fun) => (
                            AdminState.showing_type === fun.type
                            ? (
                                <div style={AdminState.showing_view === fun.id ? { display: 'block' } : {}} className="ActionloopHolderCompAdmin" key={`${fun.id}_CompAction`}>
                                    {
                                        fun.comp
                                    }
                                </div>
                            )
                            : ('') 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;
