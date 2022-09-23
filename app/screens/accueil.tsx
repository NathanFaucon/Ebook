import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'
import Booklist from '../components/Booklist';



function Accueil ({navigation}) {
    return (
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate('Wishlist')}
            title="Wishlist"
            color="#17a519"
          />
        
        </View>
  );
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: '5%',
      height: '6%',
      margin: '1%',
    }
  });

export default Accueil;