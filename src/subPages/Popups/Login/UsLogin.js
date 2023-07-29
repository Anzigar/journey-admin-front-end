import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './login.css';
// actions
import TextInputBlock from '../../Micros/TextInputBlock';
import { allDataChange } from '../../../redux/action/expo';
import { deactivatePopup } from '../../../redux/action/popupActions.js'
// api call functions
import { sendToBackendPost } from '../../../apiCalls';

function UsLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [errorSubmit, setErrorSubmit] = useState('');
    const [formValues, setFormValues] = useState({ act: 'login' });
    const getvaluesForm = (Inputname, value) => {
        const tempFormVal = formValues;
        // check if it the check value
        if (typeof (value) === 'boolean') {
            if (value) {
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

    async function submitForm(e) {
        e.preventDefault();
        console.log(formValues);
        const ans = await sendToBackendPost('/login/', formValues);
      
        if (ans && ans.state === 'success') {
          document.cookie = `sessionId=${ans.sessionId}; path=/`;
          console.log('Session ID:', ans.sessionId);
          dispatch(deactivatePopup());
          dispatch(allDataChange(Math.random()));
          navigate('/home');
        } else if (ans && ans.state !== 'success') {
          setErrorSubmit(ans.message);
        } else {
          setErrorSubmit(ans.message);
        }
        console.log(ans);
      }
      

    return (
        <div className="loginMainPopup">
            <div className="loginPopupTopSect">
            </div>
            <div className="LoginContentHolder">
                <h2 className="LoginHeaderMainPopup">Admin Login</h2>
                <form className="LoginFormPopup" onSubmit={(e) => submitForm(e)}>
                    <TextInputBlock
                        InputName="uname"
                        LabelName="User Name"
                        placeHolder="e.g. inn.irro"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'uname' ? InputClassvals.nameClass : ''}
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
                    <div className="errorDivFormHolder">
                        {
                            errorSubmit
                        }
                    </div>
                    <div className="buttonHolderLogin">
                        <button type="submit" className="loginButtonPopup">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UsLogin;
