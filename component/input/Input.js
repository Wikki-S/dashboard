import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({name, type, className, value, placeholder, labelText, handleChange}) => {
  return (
    <>
    <div className='form-row'>
        {labelText && (
        <label htmlFor={name} className='form-label'>{labelText}</label>
)}
        <input 
        name={name} 
        type={type} 
        className={`form-input ${className}`} 
        value={value} 
        onChange={handleChange} 
        autoComplete="false" />
    </div>
    </>
  )
}
Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}
export default Input