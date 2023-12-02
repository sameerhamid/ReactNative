import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatList from './components/FlatList';
import ScrollCards from './components/ScrollCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList />
        <ScrollCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
