import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

function Instruction ({children}) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

export default Instruction

const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color: Colors.accent600
    }
})