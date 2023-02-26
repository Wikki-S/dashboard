import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const {label, disabled, handleChange, className} = props
  return (
    <>
    <button className={className} onClick={handleChange} disabled={disabled}>
        {label}
    </button>
    </>
  )
}

Button.propTypes = {
    label: PropTypes.any.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    handleChange: PropTypes.func
}

export default Button