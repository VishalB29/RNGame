import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constant/Colors';
import Card from '../components/ui/Card';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler (enteredText) {
    setEnteredNumber(enteredText)
    // console.log(enteredText)
  }
  // console.log(enteredNumber)

  function resetInputHandler () {
    setEnteredNumber('')
  }

  function confirmInputhandler () {
    const choosenNumber = parseInt(enteredNumber)

    if (isNaN(enteredNumber) || enteredNumber<=0 || enteredNumber>99){
      Alert.alert(
        'Invalid Number!', 'Enter a valid number between 1 to 99',
        [{text: 'okay', style:'destructive', onPress: resetInputHandler }]

      )
      return;
    }
  onPickNumber(choosenNumber);
  }
  return (
    <View style={styles.rootContainer}>

    <Title>Guess My Number</Title>
    <Card>
      <Text style={styles.instructionText}>Enter a Number</Text>
      <TextInput
        style={styles.numberText}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputhandler} >Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginTop:100,
    paddingHorizontal:4
  },
  instructionText:{
    fontSize:24,
    color:Colors.accent600
  },
  numberText: {
    height: 50,
    fontSize: 28,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent600,
    color: Colors.accent600,
    marginVertical: 8,
    fontWeight: 'bold',
    width: '15%',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
