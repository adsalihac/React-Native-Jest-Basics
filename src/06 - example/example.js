import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import Button from './components/Button'

export default function example() {
  return (
    <View style={{flex:1}}>
      <Button name="Click" />
    </View>
  )
}