import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import React from 'react'
import App from './App'
import { name as appName } from './app.json'
import store from './redux/store'

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
