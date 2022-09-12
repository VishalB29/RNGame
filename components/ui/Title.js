import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

const Title = ({children}) => {
  return (
      <Text style={styles.title}>{children}</Text>
 
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center',
        borderWidth:5,
        borderColor: 'black',
        padding:6
    }
})