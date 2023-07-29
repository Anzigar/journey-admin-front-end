import React from "react";
import "./Home.css";
// import Map from "../map/Map";
// import Search from "../../searchbar/Search";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="home">
                <div className="header">
                   
                    <div className="buttons">
                        {/* <button onClick={() => navigate('/offence')} className="homeButtons">Offences</button>
                        <button onClick={() => navigate('/accident')} className="homeButtons">Accidents</button> */}
                        <button onClick={() => navigate('/admin')}className="homeButtons">Admin</button>
                    </div>
                </div>
             
            </div>
        </>

    );
}

export default Home;