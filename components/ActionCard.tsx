import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import dimensions from '../dimensions';

const ActionCard = () => {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={[styles.headerText, styles.colorWhite]}>
          Whats new in javascript 21 ES12
        </Text>

        <Image
          source={{
            uri: 'https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2023-10%2Fnodejs-21.jpg&w=3840&q=50',
          }}
          height={dimensions.vh * 24}
        />

        <View style={styles.cardBody}>
          <Text numberOfLines={4} style={styles.colorWhite}>
            js 21 include updates of the V8 JavaScript engine to 11.8, stable
            WebStreams, a new experimental flag to flip module defaults
            (–experimental-default-type), many updates to our test runner, and
            more! “If you're interested in getting access to interesting new
            features early, Node.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://github.com/sameerhamid');
            }}
            style={styles.link}>
            <Text style={[styles.githubLink]}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.instagram.com/sam_____33r/');
            }}
            style={styles.link}>
            <Text style={[styles.instagramLink]}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    marginHorizontal: dimensions.vw * 4,
    backgroundColor: '#0B2C10',
    borderRadius: 10,
  },
  elevatedCard: {
    shadowOffset: {width: 0, height: -6},
    shadowOpacity: 0.5,
    shadowColor: '#ccc',
    shadowRadius: 5,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  cardBody: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  link: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  githubLink: {},
  instagramLink: {},

  colorWhite: {
    color: 'white',
  },
});

export default ActionCard;
