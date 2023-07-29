import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './addUserForm.css';
// components
import TextInputBlock from '../../../../subPages/Micros/TextInputBlock';
import { changeViewSection } from '../../../../redux/action/adminActions';
import { allDataChange } from '../../../../redux/action/expo';
import {sendToBackendPost, sendToBackendPostImage} from '../../../../apiCalls'
import { activatePopup, deactivatePopup } from '../../../../redux/action/popupActions';

function AddUserForm() {
    const dispatch = useDispatch();
    const imageCont = useSelector((state) => state.CropReducer)
    const [imgDispState, setImgDispState] = useState('');
    const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
    const [formValues, setFormValues] = useState([]);
    const imgInpt = useRef(null);

    // open image file 
    const OpenFiles = () => {
        imgInpt.current?.click()
    };

    //save cropped image
    const saveCropedImg = () => {
        imgInpt.current.value = '';
        dispatch(deactivatePopup());
    }

    //capture image after selecting it from a file
    const captureImgInp = (inp) => {
        const file = inp.target.files[0];
        if (!file) {
            return false; // No file selected, handle this case accordingly
        }
        const reader = new FileReader();
        reader.onload = () => {
            const dataURL = reader.result;
            dispatch(activatePopup('croppImagSquare', {
                minorFun: () => captureImgInp(inp),
                MinorButnName: 'Re-edit',
                MainFun: () => saveCropedImg(),
                MainButnName: 'Save & Continue',
                MainIconName: 'arrow_forward',
                ImageData: dataURL,
                ImageTitle: 'Traffic Passport Size',
            }
            ));
        };
        reader.readAsDataURL(inp.target.files[0]);
        return true
    }

    //add image in the form value
    const effectAddImg = async () => {
        const TempForm = formValues;
        const upImageFile = await fetch(
            imageCont.croppedData.urldata,
        ).then((r) => r.blob());
        TempForm.image = new File([upImageFile], `${imageCont.ImageTitle}.jpeg`, { type: upImageFile.type, lastModified: Date.now() });
        setFormValues({
            ...TempForm,
        });
        setImgDispState(imageCont.croppedData.urldata);
    }

    //get form value from the user function
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


    //submit form values 
    const submitForm = async (e) => {
        e.preventDefault();

        //append traffic passport in the form data
        const formDat = new FormData();
        formDat.append('act', 'traffic_passport');
        Object.keys(formValues).map((inputName) => {
            formDat.append(inputName, formValues[inputName]);
            return true;
        });


        //send image to gateway to get image link
        const imgLink = await sendToBackendPostImage('https://dms.brentles.co.tz/gatway/car.php', formDat);
        if (typeof (imgLink) !== 'object' || typeof (imgLink.image) !== 'string') {
            dispatch(activatePopup('error', { head: 'error', text: 'unable to upload image' }));
            return false;
        }

        //check if input have values or not
        if (typeof (formValues) !== 'object' || _.isEmpty(formValues)) {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Insert data in all fields' }));
            return 1;
        } else if (typeof (formValues.image) === 'undefined') {
            dispatch(activatePopup('error', { head: 'Error!', text: 'Vehicle picture is required' }));
            return 1;
        }


        const Data = {
            fname: formValues.fname,
            lname: formValues.lname,
            policeIdNumber: formValues.policeID,
            phoneNumber: formValues.phone_number,
            profile: imgLink.image,
            password: formValues.password

        }
        const ans = await sendToBackendPost('/addUser/', Data);

        if (ans && ans.state === 'success') {
            dispatch(activatePopup('info', { head: 'Success', text: ans.message }));
            dispatch(changeViewSection('user')).then(() => dispatch(allDataChange(Math.random())));
        } else if (ans && ans.state !== 'success') {
            // dispatch popup error
            dispatch(activatePopup('error', { head: 'Error', text: ans.message }));
        } else {
            // dispatch popup error
            dispatch(activatePopup('error', { head: 'Error', text: 'Unknown Server Error' }));
        }

        console.log(ans);
    };

    useEffect(() => {
        effectAddImg();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageCont.croppedData.urldata])


    return (
        <div className="AddUserFormMain">
            <form className="AddUserForm" onSubmit={(e) => submitForm(e)}>
                <div className="AddUserFormInputsHolder">
                    <TextInputBlock
                        InputName="fname"
                        LabelName="First Name"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'fname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="lname"
                        LabelName="Last Name"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === 'lname' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="policeID"
                        LabelName="Police ID Number"
                        Type="text"
                        InputStyleClass={InputClassvals.inputName === ' policeID' ? InputClassvals.nameClass : ''}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="PhoneNumberInputHolder">
                        <div className="PhoneNumberLabelContactConfig">
                            Phone Number
                        </div>
                        <PhoneInput
                            country={'tz'}
                            onChange={(phone) => getvaluesForm('phone_number', phone)}
                            countryCodeEditable={false}
                            onlyCountries={['tz', 'ke', 'ug', 'rw']}
                            placeholder="eg. 0622000444"
                            required={true}
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
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="vehiclePictureHolder">
                        <h3 className="AddVehiclePictureHeader">Traffic Passport</h3>
                        <input style={{ display: 'none' }} type="file" name="image1" ref={imgInpt} accept="image/*" onChange={(e) => captureImgInp(e)} />
                        <div style={{ backgroundImage: `url(${imgDispState})` }} className="VehiclePictureBack" onClick={() => OpenFiles()}>
                            <button type="button" className="AddvehicleButton">
                                <span className="material-symbols-rounded">
                                    add
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="CreateUserBtnHolderAddUser">
                        <button className="CreateUserBtnAddUser">Create User</button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default AddUserForm;
