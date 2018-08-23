import React from 'react'
import cn from 'classnames'

import './card.css'

const Card = ({
  children,
  as: Element = 'div',
  className,
}) => (
  <Element className={cn('card', className)}>
    {children}
  </Element>
)

export default Card
