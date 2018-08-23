import React from 'react'

import './select.css'

const Select = ({ value, onChange, children }) => (
  <select className="input input--select">
    {children}
  </select>
)

export default Select
