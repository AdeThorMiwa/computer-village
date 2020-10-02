import React, { useState } from 'react'
import { InputBoxContainer, CheckBoxContainer } from './style';
import uid from 'uuid';

const InputBox = ({type = 'text', id = uid.v4(), label = null, ...props}) => {
    return (
        <InputBoxContainer type={type} hasLabel={label}>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} {...props} />
        </InputBoxContainer>
    )
}

const CheckBox = ({ checked = false, label = null, id = uid.v4(), onClick,...props}) => {
    const [isChecked, toggleCheck] = useState(checked)
    return (
        <CheckBoxContainer onClick={() => toggleCheck(!isChecked)}>
            <span className={`check-con ${ isChecked && 'is-checked'}`} onClick={() => onClick()}><i className="la la-check"></i></span>
            <input type="checkbox" className="d-none" defaultChecked={isChecked} id={id} {...props} /> 
            {'    '}
            { label && <label htmlFor={id}>{label}</label>}
        </CheckBoxContainer>
    )
}



export { InputBox, CheckBox }
