import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import dimensions from '../dimensions';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'sameer',
      status: 'Frontend developer',
      imgUrl:
        'https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/400664515_1492666481574093_4495747679630241931_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yONLuyx6DNEAX-d77pX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB2BJ4yTLv7RtQ4gKZbHO_J1RdEC6rAq7tIkV6eLby4Eg&oe=65713C15&_nc_sid=8b3546',
    },
    {
      uid: 2,
      name: 'Irshad',
      status: 'Busseness Man',
      imgUrl:
        'https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/400664515_1492666481574093_4495747679630241931_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yONLuyx6DNEAX-d77pX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB2BJ4yTLv7RtQ4gKZbHO_J1RdEC6rAq7tIkV6eLby4Eg&oe=65713C15&_nc_sid=8b3546',
    },
    {
      uid: 3,
      name: 'Tabish',
      status: 'Medical Representative',
      imgUrl:
        'https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/400664515_1492666481574093_4495747679630241931_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yONLuyx6DNEAX-d77pX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB2BJ4yTLv7RtQ4gKZbHO_J1RdEC6rAq7tIkV6eLby4Eg&oe=65713C15&_nc_sid=8b3546',
    },
    {
      uid: 4,
      name: 'Umer',
      status: 'Student',
      imgUrl:
        'https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/400664515_1492666481574093_4495747679630241931_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yONLuyx6DNEAX-d77pX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB2BJ4yTLv7RtQ4gKZbHO_J1RdEC6rAq7tIkV6eLby4Eg&oe=65713C15&_nc_sid=8b3546',
    },
  ];

  const handlePress = id => {
    console.log(id);
  };
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(contact => {
          return (
            <TouchableOpacity
              key={contact.uid}
              style={styles.userCard}
              onPress={() => handlePress(contact.uid)}>
              <Image
                source={{uri: contact.imgUrl}}
                height={dimensions.vh * 6}
                width={dimensions.vh * 6}
                borderRadius={100}
              />
              <View>
                <Text style={styles.userName}>{contact.name}</Text>
                <Text style={styles.userStatus}>{contact.status}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 16,
  },
  container: {
    // gap: 10,
  },
  userCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    gap: 14,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 16,
    marginBottom: 6,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {},
});

export default ContactList;
