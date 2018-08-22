import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    return (
      <main>
        {this.state.errorInfo ? (
          <div>
            <h2>Something went wrong.</h2>
            <div>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </div>
          </div>
        ) : this.props.children}
      </main>
    )
  }
}

export default App
