// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import './login.css';
// // // send api calls
// // import { sendToBackendPost } from '../../../../sharedFunctions/apiCall';
// // redux function
// import { activatePopup } from '../../../../redux/action/popupActions';
// // static images
// import logoCompny from '../../../../images/green.svg';
// import TextInputBlock from '../../Micros/TextInputBlock';

// function PassConfirm({
//     dataSend
// }) {
//     const dispatch = useDispatch();
//     const [InputClassvals, setInputClassVal] = useState({ inputName: '', nameClass: '' });
//     const [formValues, setFormValues] = useState({});
//     const getvaluesForm = (Inputname, value) => {
//         const tempFormVal = formValues;
//         // check if it the check value
//         if (typeof (value) === 'boolean') {
//             if(value) {
//                 tempFormVal[Inputname] = 'yes';
//             } else {
//                 delete tempFormVal[Inputname];
//             }
//         } else {
//             tempFormVal[Inputname] = value;
//         }
//         setFormValues({
//             ...tempFormVal,
//         });

//         setInputClassVal({ inputName: Inputname, nameClass: 'errorInput' }); // remember to remove this
//     };
//     const submitForm = async (e) => {
//         e.preventDefault();
//         dataSend.data['password'] = formValues.password;
//         const ansbck = await sendToBackendPost(dataSend.link, dataSend.data);
//         if (typeof (ansbck) === 'object' && ansbck.state === 'success') {
//             if (typeof (ansbck.data) === 'string') {
//                 dispatch(activatePopup('info', { head: 'Success', text: ansbck.data }));
//             } else {
//                 dispatch(activatePopup('info', { head: 'Success', text: 'Event was successful with complicated response.' }));
//             }
//         } else if (typeof (ansbck) === 'object' && ansbck.state !== 'success') {
//             if (typeof (ansbck.data) === 'string') {
//                 dispatch(activatePopup('error', { head: ansbck.state, text: ansbck.data }));
//             } else {
//                 dispatch(activatePopup('error', { head: ansbck.state, text: 'Something went wrong' }));
//             }
//         } else if (typeof (ansbck) ===  'string') {
//             dispatch(activatePopup('error', { head: 'Error!', text: ansbck }));
//         }else {
//             dispatch(activatePopup('error', { head: 'Error!', text: 'failed to perform this action' }));
//         }
//     }
//     return (
//         <div className="loginMainPopup">
//             <div className="loginPopupTopSect">
//                 <img src={logoCompny} className="logoLogin" alt="company logo" />
//             </div>
//             <div className="LoginContentHolder">
//                 <h2 className="LoginHeaderMainPopup">Enter Password to Confirm</h2>
//                 <form className="LoginFormPopup" onSubmit={(e) => submitForm(e)}>
//                     <TextInputBlock
//                         InputName="password"
//                         LabelName="Password"
//                         placeHolder="password"
//                         Type="password"
//                         InputStyleClass={InputClassvals.inputName === 'password' ? InputClassvals.nameClass : ''}
//                         defaultVal=""
//                         ChangeFun={getvaluesForm}
//                         is_Required={true}
//                     />
//                     <div className="buttonHolderLogin">
//                         <button type="submit" className="loginButtonPopup">Confirm</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// PassConfirm.propTypes = {
//     dataSend: PropTypes.object.isRequired,
// }

// export default PassConfirm;
