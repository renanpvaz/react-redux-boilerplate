import React from 'react'
import cn from 'classnames'

import './button.css'

const Button = ({
  children,
  ghost,
  disabled,
  onClick,
}) => (
  <button
    className={cn(
      'button',
      ghost && 'button--ghost',
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
