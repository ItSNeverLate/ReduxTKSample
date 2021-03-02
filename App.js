import React from 'react'
import {
  Button, Text, View
} from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import { increment, decrement } from './redux/slices/app.slice'

const App = () => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)
  console.log(useSelector(state => state.app))

  return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="-" onPress={() => dispatch(increment())} />
        <Text>{app.counter}</Text>
        <Button title="+" onPress={() => dispatch(decrement())} />
      </View>
  )
}

export default App
