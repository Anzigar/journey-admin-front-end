import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './erroPop.css';
// actions
import { deactivatePopup } from '../../../redux/action/popupActions';


function ErrorPop({
    errorText, HeadName, infoState
}) {
    const dispatch = useDispatch();
    return (
        <div className="ErrorPopMain">
            <div className="HeadSectionErrorPop">
                <h1 className={`ErrorNameErrorPop ${infoState ? 'InfoNameStyleErrorPop' : ''}`}>
                    {
                        HeadName
                    }
                </h1>
            </div>
            <div className="ErrorInfoContentHolderErrorPop">
                {
                    errorText
                }
            </div>
            <div className="okayButtonHolderErrorPop">
                <button type="button" onClick={() => dispatch(deactivatePopup())}>Okay</button>
            </div>
        </div>
    );
}

ErrorPop.propTypes = {
    errorText: PropTypes.string.isRequired,
    HeadName: PropTypes.string.isRequired,
    infoState: PropTypes.bool.isRequired,
};

export default ErrorPop;