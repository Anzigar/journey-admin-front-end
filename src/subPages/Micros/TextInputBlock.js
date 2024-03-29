import React from 'react';
import PropTypes from 'prop-types';
import './textInputBlock.css';
  
function TextInputBlock({
    LabelName, Type, ChangeFun, InputStyleClass,  defaultVal, InputName, is_Required, placeHolder,
}) {
    return (
        <div className="TextInputBlockMain">
            <div className="InputnameTextInputBlock">
                {
                    LabelName
                }
            </div>
            <input placeholder={placeHolder} type={Type} required={is_Required} className={`InputTextInputBlock ${InputStyleClass}`} name={InputName} defaultValue={defaultVal} onChange={(e) => ChangeFun(InputName, e.target.value)} />
        </div>
    );
}

TextInputBlock.propTypes = {
    InputName: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    ChangeFun: PropTypes.func.isRequired,
    InputStyleClass: PropTypes.string.isRequired,
    defaultVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    LabelName: PropTypes.string.isRequired,
    is_Required: PropTypes.bool.isRequired,
    placeHolder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextInputBlock;