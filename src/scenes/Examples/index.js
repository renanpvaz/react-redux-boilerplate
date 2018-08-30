import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { growl } from 'store/ui/actions'
import {
  GROWL_INFO,
  GROWL_ERROR,
  GROWL_SUCCESS,
} from 'store/ui/constants'

import Button from 'components/Button'
import Input from 'components/Input'
import Field from 'components/Field'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'
import Container from 'components/Container'

import './examples.scss'

const Example = ({ title, children }) => (
  <div className="example">
    <h2>{title}</h2>
    <hr />
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
      <Container>
        <Card className="examples">
          <h1>Component Examples</h1>
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
              block
              placeholder="Block input"
            />
            <div>
              <Input
                as="textarea"
                placeholder="Textarea"
              />
            </div>
          </Example>
          <Example title="Fields">
            <Field
              id="field1"
              label="A neat little label"
            />
            <Field
              id="field2"
              label="Another neat little label"
              info="And some more information"
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
          <Example title="Growl">
            <Button onClick={() => this.props.growl('Something happened!')}>
              Show growl
            </Button>
            <Button onClick={() => this.props.growl('Something successfully happened!', GROWL_SUCCESS)}>
              Show success growl
            </Button>
            <Button onClick={() => this.props.growl('Something wrong happened!', GROWL_ERROR)}>
              Show error growl
            </Button>
          </Example>
        </Card>
      </Container>
    )
  }
}

export default connect(null,
  dispatch => bindActionCreators({
    growl,
  }, dispatch)
)(Examples)
