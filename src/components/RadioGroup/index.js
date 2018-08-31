import React from 'react'

import './radio-group.scss'

const Radio = ({
  name,
  value,
  checked,
  label,
  onChange,
}) => (
  <div className="radio">
    <input
      className="radio__bullet"
      type="radio"
      id={value}
      name={name} 
      onChange={onChange}
    />
    <label className="radio__label" htmlFor={value}>{label}</label>
  </div>
)

const RadioGroup = ({ options, name, onChange }) => (
  <div className="radio-group">
    {options.map(option => (
      <Radio
        key={option.value}
        value={option.value}
        label={option.label}
        name={name}
        onChange={onChange}
      />
    ))
    }
  </div>
)

export default RadioGroup
