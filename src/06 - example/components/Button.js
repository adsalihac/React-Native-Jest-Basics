// @flow

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import type { Node } from "react"

type PropsType = {
  name? : string,
  onPress?: () => Promise<void> | void,
}

const Button = (props: PropsType): Node => {
  return (
    <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default Button