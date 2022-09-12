import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

const PrimaryButton = ({children, onPress}) => {

  return (
    
    <View style={styles.outerContainer} >
        <Pressable style={({pressed}) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer} 
        onPress={onPress} >
      <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>

    
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    outerContainer:{
        margin:4,
    },
    innerContainer:{
        backgroundColor: Colors.primary200,
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:20
    },
    buttonText:{
        textAlign:'center'
    },
    pressed:{
        opacity: 0.75,
    }
})