import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListItem from './lisIten';



const ListScreen = () => {
  const data = [
    { id: 1, imageSource: require('../assets/gasolina.png'), text: 'A gasolina é um combustível líquido derivado do petróleo, amplamente utilizado em veículos automotores. Sua combustão dentro dos motores de combustão interna gera energia mecânica, impulsionando o movimento dos veículos. Apesar de sua eficiência, seu uso é associado à emissão de gases poluentes, o que levanta preocupações ambientais.' },
    { id: 2, imageSource: require('../assets/etanol.png'), text: 'O etanol, derivado de fontes renováveis como a cana-de-açúcar, é um importante biocombustível, contribuindo para reduzir a dependência de combustíveis fósseis e as emissões de gases de efeito estufa. Além disso, é amplamente utilizado na indústria química como solvente e na produção de bebidas alcoólicas, exigindo práticas responsáveis para seu uso.' },
    { id: 3, imageSource: require('../assets/diesel.png'), text: 'O diesel é um combustível derivado do petróleo, amplamente utilizado em veículos automotores, especialmente em motores a diesel, máquinas industriais e geradores de energia. É conhecido por sua eficiência energética e alto poder calorífico, sendo essencial para o transporte de carga e para muitas indústrias. No entanto, seu uso tem sido associado à poluição do ar devido às emissões de óxidos de nitrogênio e partículas, impulsionando esforços para desenvolver alternativas mais limpas e sustentáveis.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Itens</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem imageSource={item.imageSource} text={item.text} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ListScreen;
