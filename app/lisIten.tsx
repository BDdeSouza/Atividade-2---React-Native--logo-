import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ListItemProps {
  imageSource: any;
  text: string;
}


const ListItem: React.FC<ListItemProps> = ({ imageSource, text }: ListItemProps) => {
  
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 340,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius:10,
    marginBottom:10
  },
  image: {
    width: 115,
    height: 30,
    marginRight: 10,
    
  },
  text: {
    
    fontSize: 12,
    textAlign: 'justify',
    maxWidth: '55%'
  },
});

export default ListItem;
