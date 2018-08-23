import React from 'react'

import Button from 'components/Button'
import Icon from 'components/Icon'
import Input from 'components/Input'

import './examples.css'

const Example = ({ children }) =>
  <div className="example example--inline">{children}</div>

const Examples = () => (
  <div style={{ maxWidth: 900, margin: '32px auto'}}>
    <Example>
      <Button>Basic</Button>
      &nbsp;&nbsp;
      <Button ghost>Ghost</Button>
      &nbsp;&nbsp;
      <Button disabled>Disabled</Button>
      &nbsp;&nbsp;
      <Button icon="alert-triangle">With icon</Button>
      &nbsp;&nbsp;
    </Example>
    <Example>
      <Input
        placeholder="Placeholder"
      />
      <Input
        placeholder="Placeholder"
        icon="book-open"
        placeholder="With icon"
      />
      <Input
        placeholder="Placeholder"
        type="search"
        placeholder="[type=search]"
      />
    </Example>
    <Example>
      <Input
        as="textarea"
        placeholder="Textarea"
      />

    </Example>
  </div>
)

export default Examples
