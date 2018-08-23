import React from 'react'

import Button from 'components/Button'
import Icon from 'components/Icon'

const Examples = () => (
  <div style={{ maxWidth: 900, margin: '32px auto'}}>
    <div>
      <Button>Basic</Button>
      &nbsp;&nbsp;
      <Button ghost>Ghost</Button>
      &nbsp;&nbsp;
      <Button disabled>Disabled</Button>
      &nbsp;&nbsp;
      <Button icon="alert-triangle">With icon</Button>
      &nbsp;&nbsp;
    </div>
  </div>
)

export default Examples
