import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

function Card ({children}) {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: 36,
    backgroundColor: Colors.primary500,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    elevation:4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 6,
    shadowRadius: 0.15,
  },
});
