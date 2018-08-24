import React from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = ({
  isAllowed,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => isAllowed()
      ? <Component {...props} />
      : (
        <Redirect
          to={{
            pathname: '/', // where user will be sent when disallowed
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default connect(
  state => ({
    location: state.router.location,
    isAllowed: () => {
      // replace with selector that tells if user is allowed
      return false;
    },
  })
)(ProtectedRoute)
