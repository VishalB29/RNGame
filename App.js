import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';
import Colors from './constant/Colors';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  function gameOverHandler (numberOfROunds) {
    setGameIsOver(true);
    setGuessRounds(numberOfROunds)
  }

  function StartNewGameHandler () {
    setUserNumber(null)
    setGuessRounds(0)

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen  userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={StartNewGameHandler} />
  }


  return (
    <LinearGradient colors={[Colors.accent200, Colors.primary200]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/riho-kroll-m4sGYaHYN5o-unsplash.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundColor}>
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundColor: {
    opacity: 0.15,
  },

});
