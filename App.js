import React from 'react'
import {
  Button, StyleSheet, Text, View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/app.slice'

const App = () => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)
  console.log(useSelector(state => state))

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text>{app.counter}</Text>
      <Button title="-1" onPress={() => dispatch(decrement())} />
      <Button title="+1" onPress={() => dispatch(increment())} />
      <Button title="+2" onPress={() => dispatch({ type: 'incrementBy', payload: 2 })} />
    </View>
  )
}

export default App
