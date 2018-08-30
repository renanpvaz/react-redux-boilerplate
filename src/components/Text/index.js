import React, { Fragment } from 'react'
import cn from 'classnames'

import './text.scss'

const Text = ({
  as: T = 'span',
  bold,
  light,
  size,
  separator,
  children
}) => (
  <Fragment>
    <T
      className={cn('text',
        size && `text-${size}`,
        separator && 'text--with-separator'
      )}
    >
      {children}
    </T>
  </Fragment>
)

export default Text
