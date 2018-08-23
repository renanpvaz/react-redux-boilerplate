import React from 'react'

import Button from 'components/Button'
import Icon from 'components/Icon'
import Input from 'components/Input'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import Select from 'components/Select'

import './examples.css'

const Example = ({ children }) =>
  <div className="example">{children}</div>

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
      <Button icon="plus" />
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
    <Example>
      <RadioGroup
        name="radio"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
      />
    </Example>
    <Example>
      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option2">Option 3</option>
      </Select>
    </Example>
    <Example>
      <Card>
        <p>Card with some text.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Card>
    </Example>
  </div>
)

export default Examples
