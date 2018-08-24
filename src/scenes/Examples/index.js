import React from 'react'

import Button from 'components/Button'
import Input from 'components/Input'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'

import './examples.css'

const Example = ({ title, children }) => (
  <div className="example">
    <h2 className="example__title">{title}</h2>
    <div className="example__content">
      {children}
    </div>
  </div>
)

class Examples extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false }
  }

  render() {
    return (
      <div className="examples">
        <Example title="Buttons">
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
        <Example title="Text Inputs">
          <Input
            placeholder="Placeholder"
          />
          <Input
            icon="book-open"
            placeholder="With icon"
          />
          <Input
            type="search"
            placeholder="[type=search]"
          />
          <Input
            as="textarea"
            placeholder="Textarea"
          />
        </Example>
        <Example title="Radio Group">
          <RadioGroup
            name="radio"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
        </Example>
        <Example title="Select">
          <Select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option2">Option 3</option>
          </Select>
        </Example>
        <Example title="Card">
          <Card>
            <p>Card with some text.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Card>
        </Example>
        <Example title="Modal">
          <Button onClick={() => this.setState({ modalOpen: true })}>
            Open modal
          </Button>
          <Modal onClose={() => this.setState({ modalOpen: false })} open={this.state.modalOpen}>
           <h3>Modal example</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
         </Modal>
        </Example>
      </div>
    )
  }
}

export default Examples
