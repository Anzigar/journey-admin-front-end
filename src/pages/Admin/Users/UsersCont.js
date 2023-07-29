import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './usersCont.css';
import { sendToBackendGet } from '../../../apiCalls';
import { useSelector } from 'react-redux';
// components
import TextSearch from '../Inputs/TextSearch';
import UserComp from './Sections/UserComp';
import Navbar from '../../../navbar/Navbar';
import _ from 'lodash';

function UsersCont() {
    const changeVal = useSelector((state) => state.ActiveSearchRed.change);
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const searchUsers = (val) => {
        console.log(val);
    }

    const getUserData = async () => {
        const userData = await sendToBackendGet('/user/');
        if (typeof (userData.state) !== 'undefined' && userData.state !== 'success') {
            setUser([]);
            console.log(userData);
            if (userData.state === 'not login') {
                navigate('/');
            }
            return 0;
        }
        setUser(userData);
    }
    useEffect(() => {
        getUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeVal]);
    return (
        <div className="UserContMain">
            <div className="UserTopSectionUserCont">
                <div className="topSectionUser">
                    <h2 className="SectionNameUserCont">
                        Video Posted
                    </h2>
                    <Navbar
                        activePage='admin'
                    />
                </div>
                <div className="searchSectionHolder">
                    <TextSearch
                        PlaceHolder="Search for Users: name or email"
                        defaultVal=""
                        searchFun={searchUsers}
                    />
                </div>
            </div>
            <div className="headingOnContentSectionUserCont">
                <h3 className="HeadNameOnContentUserCont">
                    Available videos
                </h3>
            </div>


            <div className="UsersHolderContainerUserCont">
                {

                    typeof (user) === 'object' && !_.isEmpty(user)
                        ? user.map((data, i) => (
                            <div className="UserCompLoopHolderUserCont" key={i}>
                                <UserComp
                                    Fname={data.firstName}
                                    Lname={data.lastName}
                                    policeID={data.policeIdNumber}
                                    phone={data.phoneNumber}
                                    password={data.password}
                                    uid={data.userId}
                                />
                            </div>
                        ))
                        : (<div className="noresultsfoundClass">No video found</div>)
                }
            </div>
        </div>
    );
}

export default UsersCont;
