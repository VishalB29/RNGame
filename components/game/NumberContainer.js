import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accent600,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        fontSize:36,
        color: Colors.accent600,
        fontWeight:'bold',
    }
})