import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// phone input
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './userEditComp.css';

import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';
import { sendToBackendPost } from '../../../../apiCalls';
import { activatePopup } from '../../../../redux/action/popupActions';
import { allDataChange } from '../../../../redux/action/expo';

function UserEditComp({
    Fname, Lname,phone,dispFun, policeID, password, userID
}) {
    const dispatch = useDispatch();
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState({uid: userID,});
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

    
    const submitForm = async (e) => {
        e.preventDefault();
        const ans = await sendToBackendPost('/updateUser/', formValues);
        if (ans && ans.state === 'success') {
            dispFun();
            dispatch(activatePopup('info', { head: 'Success', text: ans.message }));
            dispatch(allDataChange(Math.random()));
        } else if (ans && ans.state !== 'success') {
            // dispatch popup error
            dispatch(activatePopup('error', { head: 'Error', text: ans.message }));
        } else {
            // dispatch popup error
            dispatch(activatePopup('error', { head: 'Error', text: 'Unknown Server Error' }));
        }
    };
    
    return (
        <div className="UserEditCompMain">
            <form className="EditUserDetailsForm" onSubmit={(e) => submitForm(e)}>
                <div className="inputsUserEditHolder">
                    <TextInputBlock
                        InputName="fname"
                        LabelName="First Name"
                        placeHolder="e.g. eliza"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal={Fname}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="lname"
                        LabelName="Last Name"
                        placeHolder="e.g. Makala"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                        defaultVal={Lname}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="policeID"
                        LabelName="Police ID Number"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === ' policeID' ? InputClassvals.nameClass : ''}
                        defaultVal={policeID}
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="PhoneNumberInputHolder">
                        <div className="PhoneNumberLabelContactConfig">
                            Phone Number
                        </div>
                        <PhoneInput
                            country={'tz'}
                            onChange={ (phone) => getvaluesForm('phone_number', phone)}
                            countryCodeEditable={false}
                            onlyCountries={['tz', 'ke', 'ug', 'rw']}
                            placeholder="eg. 0622000444"
                            required={true}
                            value={phone}
                            containerClass="phoneInputContainer"
                            inputClass="phoneInputClassPhone"
                            buttonClass="flagDropDownCustomPhone"
                            inputProps={{ required: true }}
                        />
                    </div>
                    <TextInputBlock
                        InputName="password"
                        LabelName="Password"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'password' ? InputClassvals.nameClass : ''}
                        defaultVal=''
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="buttonHolderEditUserEditComp">
                        <button className="buttonCancelEditUserEdit" type="reset" onClick={() => dispFun()}>Cancel</button>
                        <button className="buttonUpdateEditUserEdit" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

UserEditComp.propTypes = {
    Fname: PropTypes.string.isRequired,
    Lname: PropTypes.string.isRequired,
    policeID: PropTypes.string.isRequired,
    phone: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    password: PropTypes.string.isRequired,
    dispFun: PropTypes.func.isRequired,
    userID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default UserEditComp;
