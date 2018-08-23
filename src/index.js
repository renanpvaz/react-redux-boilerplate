import 'normalize.css/normalize.css'
import './main.css'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import rootReducer from 'store'

import App from './App'
import Button from 'components/Button'

const history = createBrowserHistory()
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  enhancedCompose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => <Button>Hello</Button>} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
