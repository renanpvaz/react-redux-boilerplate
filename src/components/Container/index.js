import React from 'react'
import cn from 'classnames'

import './container.scss'

const Container = ({ children, size, className }) => (
  <div className={cn('container', size && `container--${size}`, className)}>
    {children}
  </div>
)

export default Container
