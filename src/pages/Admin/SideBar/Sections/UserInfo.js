import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './UserInfo.css';
// static images
import clientLogo from '../../../../images/profavatar.png';
// import { sendToBackendPost } from '../../../../apiCalls';

function UserInfo() {
    const navigate = useNavigate();
    const TrafficInfo = useSelector((state) => state.SessionReducer.user);

    console.log(TrafficInfo);
    const logoutClient = () => {
        navigate('/');
    };



    return (
        <div className="CompanyUserInfoMain">
            <div className="CompanyUserInfoContentHolder">
                <div className="companyInfoSectionAdmin">
                    <div className="CompanyNameHolderCompanuUserInfo">ADMIN PANEL</div>
                    <button className="logoutButtonCompanyUserInfo" type="button" onClick={() => logoutClient()}>
                        <span className="material-symbols-rounded">
                            logout
                        </span>
                    </button>
                </div>
                <div className="clientInfoSectionAdmin">
                    <div className="ImageHolderClientLogoAdmin">
                        <img src={clientLogo} className="ImageClientLogoAdmin" alt="Client company logo" />
                    </div>
                    <div className="textInfoClientAdmin">
                        <h2 className="clientCompanyNameAdmin">{TrafficInfo.userName}</h2>
                        <div className="clientCompanyRegionNameAdmin">Tanzania</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
