import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import dimensions from '../dimensions';

const ScrollCards = () => {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Scroll card</Text>
      </View>
      <ScrollView horizontal style={styles.scorllCardsContianer}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.font20}>Tap</Text>
        </View>

        <View style={[styles.card, styles.card2]}>
          <Text style={styles.font20}>me</Text>
        </View>

        <View style={[styles.card, styles.card3]}>
          <Text style={styles.font20}>to</Text>
        </View>

        <View style={[styles.card, styles.card4]}>
          <Text style={styles.font20}>scroll</Text>
        </View>

        <View style={[styles.card, styles.card5]}>
          <Text style={styles.font20}>😄</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scorllCardsContianer: {
    marginHorizontal: 16,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 10,
  },
  card: {
    width: dimensions.vw * 30,
    height: dimensions.vh * 13,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'teal',
  },
  card3: {
    backgroundColor: 'black',
  },
  card4: {
    backgroundColor: 'green',
  },
  card5: {
    backgroundColor: '#ccc',
  },

  font20: {
    fontSize: 20,
    color: 'white',
  },
});

export default ScrollCards;
