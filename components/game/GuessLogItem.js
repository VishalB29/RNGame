import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderColor:Colors.primary500,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.accent600,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
    }
})