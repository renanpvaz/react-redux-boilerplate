import React from 'react'
import cn from 'utils/cn'

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
  direction,
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
      flexDirection: column ? 'column'
        : (row || wrap) ?  'row'
        : direction,
    }}
    className={
      cn(
        'panel',
        className,
        inset && 'panel-inset',
        fit && 'panel-fit',
        inset && `panel-inset-${inset}`,
        x && `panel-x-${x}`,
        y && `panel-y-${y}`,
        below && `panel-below-${below}`,
        between && `panel-between-${between}`,
        between && (inline || row) && `panel-between-inline-${between}`,
        (row || column || wrap) && 'panel-flex',
      )
    }
  >
    {children}
  </Tag>
)

export default Panel
