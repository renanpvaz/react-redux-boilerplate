import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'

import './input.scss'

const Input = ({
  as: T = 'input',
  onChange,
  value,
  placeholder,
  type,
  block,
}) => (
  <T
    className={cn('input', (block || T === 'textarea') && 'input--block')}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
  />
)

const InputWithIcon = props => (
  <div className="input-with-icon">
    <span className="input-with-icon__icon">
      <Icon name={props.type === 'search' ? 'search' : props.icon} />
    </span>
    <Input {...props} />
  </div>
)

const shouldHaveIcon = props =>
  'icon' in props || props.type === 'search'

export default props => shouldHaveIcon(props)
  ? <InputWithIcon {...props} />
  : <Input {...props} />
