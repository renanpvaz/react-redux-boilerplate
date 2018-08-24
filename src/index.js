import 'normalize.css/normalize.css'
import './main.css'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import rootReducer from 'store'

import App from './App'
import Examples from 'scenes/Examples'
import ProtectedRoute from 'containers/ProtectedRoute'

const history = createBrowserHistory()
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  enhancedCompose(
    applyMiddleware(
      routerMiddleware(history),
      createSagaMiddleware(),
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Examples} />
          <ProtectedRoute path="/protected" component={() => 'Protected content'} />
          <Route render={() => 404} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
