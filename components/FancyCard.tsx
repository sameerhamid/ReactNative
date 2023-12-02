import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import dimensions from '../dimensions';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Place</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pahalgam_views_13.JPG/250px-Pahalgam_views_13.JPG',
          }}
          style={{
            height: dimensions.vh * 24,
            overflow: 'hidden',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Pahalgam</Text>
          <Text style={styles.cardLabel}>J&K, Anantnag</Text>

          <Text style={styles.cardDec}>
            Pahalgam is located at 34.01°N 75.19°E.[12] Pahalgam holds a central
            position in the Lidder Valley. It has an average elevation of 2,740
            metres (8,990 ft).
          </Text>

          <Text style={styles.cardFooter}>1 hour, 15 minutes away</Text>
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
    marginTop: 18,
    marginBottom: 10,
  },
  card: {
    width: dimensions.vw * 92,
    // height: 'fit-content',
    marginHorizontal: dimensions.vw * 4,
    borderRadius: 10,
  },

  cardElevated: {
    backgroundColor: '#ccc',
    elevation: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'red',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 4,
  },

  cardDec: {
    fontSize: 16,
  },
  cardFooter: {
    marginVertical: 10,
  },
});

export default FancyCard;
