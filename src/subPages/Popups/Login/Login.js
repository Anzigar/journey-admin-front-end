import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';


//components
import TextInputBlock from '../../Micros/TextInputBlock';

// static images

function Login() {
    const navigate = useNavigate();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({});
    const getvaluesForm = (Inputname, value) => {
        const tempFormVal = formValues;
        // check if it the check value
        if (typeof (value) === 'boolean') {
            if(value) {
                tempFormVal[Inputname] = 'yes';
            } else {
                delete tempFormVal[Inputname];
            }
        } else {
            tempFormVal[Inputname] = value;
        }
        setFormValues({
            ...tempFormVal,
        });

        setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
    };
    const submitForm = (e) => {
        e.preventDefault();
        navigate('/home');
    }
    return (
        <div className="loginMainPopup">
            <div className="LoginContentHolder">
                <h2 className="LoginHeaderMainPopup">Admin Login</h2>
                <form className="LoginFormPopup" onSubmit={(e) => submitForm(e)}>
                    <TextInputBlock
                        InputName="user_name"
                        LabelName="Registered Email"
                        placeHolder="email used to registered"
                        Type="email"
                        InputStyleClass={InputClassvals.inputName === 'user_name' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="password"
                        LabelName="Password"
                        placeHolder="password"
                        Type="password"
                        InputStyleClass={InputClassvals.inputName === 'password' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="buttonHolderLogin">
                        <button onClick={() => navigate('/home')} type="submit" className="loginButtonPopup" >Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;