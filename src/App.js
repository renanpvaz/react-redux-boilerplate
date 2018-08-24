import React from 'react'

import ErrorBoundary from 'containers/ErrorBoundary'
import Growl from 'containers/Growl'

class App extends React.Component {
  render() {
    return (
      <main>
        <Growl />
        <ErrorBoundary>
          {this.props.children}
        </ErrorBoundary>
      </main>
    )
  }
}

export default App
