import React from 'react'
import cn from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getGrowls } from 'store/ui'
import {
  GROWL_ERROR,
  GROWL_SUCCESS,
} from 'store/ui/constants'

import './growl.scss'

const GrowlMessage = ({ message, type, hidden }) => (
  <li className={cn(
      'growl',
      hidden && 'growl--hidden',
      type === GROWL_ERROR && 'growl--error',
      type === GROWL_SUCCESS && 'growl--success',
    )}
  >
    {message}
  </li>
)

const Growl = ({ messages }) => (
  <ul className="growl-list">
    {messages.map(
      msg => <GrowlMessage key={msg.id} {...msg} />
    )}
  </ul>
)

export default connect(
  state => ({ messages: getGrowls(state) }),
)(Growl)
