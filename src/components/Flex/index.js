import React from 'react'
import cn from 'classnames'

import './flex.css'

const Flex = ({
  tag: Tag = 'div',
  className,
  children,
  direction,
  items,
  self,
  justify,
  wrap,
  auto,
  flex,
}) => (
  <Tag
    className={cn(
      className,
      'flex',
      direction && `flex--flex-${direction}`,
      items && `flex--items-${items}`,
      self && `flex--self-${self}`,
      justify && `flex--justify-${justify}`,
      wrap && 'flex--wrap',
      auto && 'flex--auto',
    )}
    style={{ flex }}
  >
    {children}
  </Tag>
)

export default Flex
