import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = ({ activePage }) => {
    const navigate = useNavigate();
    return (
        <div className="buttonIconsOffences">
            <button onClick={() => navigate('/offence')} className={`iconButtonNaigation ${ activePage === 'offence' ? 'activeButtonNavigation' : '' }`}>
                <span className="material-symbols-rounded">
                    remove_road
                </span>
            </button>
            <button onClick={() => navigate('/accident')} className={`iconButtonNaigation ${ activePage === 'accident' ? 'activeButtonNavigation' : '' }`}>
                <span className="material-symbols-rounded">
                    car_crash
                </span>
            </button>
            <button onClick={() => navigate('/home')} className={`iconButtonNaigation ${ activePage === 'home' ? 'activeButtonNavigation' : '' }`}>
                <span className="material-symbols-rounded">
                    map
                </span>
            </button>
            <button onClick={() => navigate('/admin')} className={`iconButtonNaigation ${ activePage === 'admin' ? 'activeButtonNavigation' : '' }`}>
                <span className="material-symbols-rounded">
                    admin_panel_settings
                </span>
            </button>
        </div>
    );
}

export default Navbar;