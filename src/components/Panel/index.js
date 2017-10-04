import React from 'react'
import classNames from 'classnames'

import './panel.css'

const Panel = ({
  tag: Tag = 'div',
  className,
  children,
  fit,
  inset,
  x,
  y,
  below,
  between,
  inline,
  row,
  column,
  flex,
  align,
  justify,
  wrap,
  innerRef,
  sizing,
  centered
}) => (
  <Tag
    ref={innerRef}
    style={{
      boxSizing: `${sizing}-box`,
      flex,
      alignItems: align || (centered && 'center'),
      justifyContent: justify || (centered && 'center'),
      flexWrap: wrap && 'wrap',
      flexDirection: column ? 'column' : (row || wrap)
                            ? 'row' : '',
    }}
    className={
      classNames(
        'panel',
        className,

        inset && 'panel-inset',
        fit && 'panel-fit',

        // padding
        inset && `panel-inset-${inset}`,
        x && `panel-x-${x}`,
        y && `panel-y-${y}`,

        // margin
        below && `panel-below-${below}`,
        between && `panel-between-${between}`,
        between && (inline || row) && `panel-between-inline-${between}`,

        // alignment
        (row || column || wrap) && 'panel-flex',
      )
    }
  >
    {children}
  </Tag>
)

export default Panel
