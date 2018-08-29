import React from 'react'
import feather from 'feather-icons'

import './icon.scss'

const Icon = ({ name }) => (
  <i
    className="icon"
    dangerouslySetInnerHTML={{__html: feather.icons[name].toSvg({ height: 16, width: 16 })}}
  />
)

export default Icon
