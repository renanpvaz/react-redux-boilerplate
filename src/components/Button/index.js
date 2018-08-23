import React from 'react'
import cn from 'classnames'

import './button.css'

const Button = ({ children, ghost }) => (
  <button
    className={cn(
      'button',
      ghost && 'button--ghost',
    )}
  >
    {children}
  </button>
)

export default Button
