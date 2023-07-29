import React, { useState } from 'react';
import './profileSettings.css';
// components
import TextInputBlock from '../../../subPages/Micros/TextInputBlock';

function ProfileSettings() {
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
        console.log(formValues);
    }
    return (
        <div className="ProfileSettingsMain">
            <div className="SettingsTopSection">
                <h2 className="SectionNameSettingCont">
                    Profile Settings
                </h2>
            </div>
            <div className="ChangePassWordProfileSettingSection">
                <h3 className="ChangePasswordheadProfileSetting">Change Admin Password</h3>
                <form className="ChangePasswordFormProfileSettings" onSubmit={(e) => submitForm(e)}>
                    <div className="InputsProfileSettingsHolder">
                        <TextInputBlock
                            InputName="e_password"
                            LabelName="Current Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'e_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="n_password"
                            LabelName="New Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'n_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <TextInputBlock
                            InputName="co_password"
                            LabelName="Confirm Password"
                            placeHolder="8 characters"
                            Type="password"
                            InputStyleClass={InputClassvals.inputName === 'co_password' ? InputClassvals.nameClass : ''}
                            defaultVal=""
                            ChangeFun={getvaluesForm}
                            is_Required={true}
                        />
                        <div className="ChangePasswordButtonHolderSettings">
                            <button className="ChangePasswordButtonSettings" type="submit">
                                Change Password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileSettings;
