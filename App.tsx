import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FlatList from './components/FlatList';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
