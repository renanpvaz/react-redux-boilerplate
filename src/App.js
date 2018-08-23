import React from 'react'

import ErrorBoundary from 'containers/ErrorBoundary'

class App extends React.Component {
  render() {
    return (
      <main>
        <ErrorBoundary>
          {this.props.children}
        </ErrorBoundary>
      </main>
    )
  }
}

export default App
