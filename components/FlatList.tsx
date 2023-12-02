import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import dimensions from '../dimensions';

const FlatList = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>

      <View style={styles.flatListContainer}>
        <View style={[styles.pink, styles.card]}>
          <Text>pink</Text>
        </View>

        <View style={[styles.orange, styles.card]}>
          <Text>grey</Text>
        </View>

        <View style={[styles.teal, styles.card]}>
          <Text>teal</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: dimensions.vh * 1,
    flexWrap: 'wrap',
  },
  card: {
    width: dimensions.vw * 30,
    height: dimensions.vh * 13,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pink: {
    backgroundColor: 'pink',
  },
  grey: {
    backgroundColor: 'grey',
  },
  teal: {
    backgroundColor: 'teal',
  },
  orange: {
    backgroundColor: 'orange',
  },
  purple: {
    backgroundColor: 'purple',
  },
  blue: {
    backgroundColor: 'blue',
  },
});

export default FlatList;
