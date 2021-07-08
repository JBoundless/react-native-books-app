import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Books from './Books';

const App = () => {
  
  return (
    <View style={styles.centeredView}>
      <Text style={{textAlign: 'center', fontWeight: 700, fontSize: 35, paddingBotton: 20}}>Book Review App</Text>
      <Books />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22
  }
});

export default App;