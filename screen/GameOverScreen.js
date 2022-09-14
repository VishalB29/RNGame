import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constant/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
        <Text style={styles.summaryText}>
          Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> Rounds to guess the Number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer:{
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:'100%'
  },
  imageContainer:{
    margin:36,
    height:300,
    width:300, 
    borderRadius:150,
    overflow:'hidden',
    borderWidth:3,
    borderColor:'black'
  },
  summaryText:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:24
  },
  highlight:{
    color:Colors.primary500
  }
});
