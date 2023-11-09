import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//@ts-ignore
const ListItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 32, 
    alignItems:"center", 
    borderRadius: 20,
    borderWidth:1,
    borderColor:"lightgrey",
    backgroundColor:"white",
    justifyContent:"center", 
    width: "20%", 
    marginBottom: 16
  },
  text: {
    color:"black"
  }
});

export default ListItem;
