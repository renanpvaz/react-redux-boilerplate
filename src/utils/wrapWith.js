import React from 'react'

const wrapWith = element => children => {
  return React.createElement(
    typeof element === 'string' ? element : element.type,
    element.props,
    children
  )
}

export default wrapWith
