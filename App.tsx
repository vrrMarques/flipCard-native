import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FlipCard from 'react-native-flip-card';

export default function app() {
  return (
    <View style={styles.container}>
      <FlipCard flipHorizontal={true} flipVertical={false}>
        {/* Frente do cartão */}
        <View style={styles.card}>
          <Text>Quanto é "1" + "1"?????</Text>
        </View>
        {/* Verso do cartão */}
        <View style={[styles.card, styles.cardBack]}>
            <Text>"11"</Text>
        </View>
      </FlipCard>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:100
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardBack: {
    backgroundColor: 'pink',
  },
});