import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const LogoComponent = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    

  },
  header: {
    alignItems: 'center',
    marginBottom: 100,
    backgroundColor: 'white',
    top:10,
    

  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});


export default LogoComponent;
