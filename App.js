
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView, Alert } from 'react-native';
import foto from './assets/Perfil.jpg';
import Icon from 'react-native-vector-icons/Feather'
import Card from './src/components/Card'

const App = () => {

  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu linkedin','https://www.linkedin.com/in/gabriel-pinto-aa71b9b6/')
        break
      case 'github':
        Alert.alert('Meu github','https://github.com/BielPinto/')
      break
      case 'facebook':
        Alert.alert('Meu facebook','https://facebook.com')
      break
    }

  }
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho} >
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>Gabriel Pinto</Text>
          <Text style={styles.funcao}>Desenvolvedor Full Stak</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={()=>handleRedeSocial('github')}> 
              <Icon name='github' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('facebook')}>
              <Icon name='facebook' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
              <Icon name='linkedin' size={30} />
            </TouchableOpacity>              
          </View>
        </View>


        <Card titulo='Formação Profissional'>
          <Text style={styles.card_content_text}>Full Stack</Text>
          <Text style={styles.card_content_text}>Front-end</Text>
          <Text style={styles.card_content_text}>Back-end </Text>
        </Card>
        <Card titulo='Formação Academica'>
          <Text style={styles.card_content_text}>Full Stack</Text>
          <Text style={styles.card_content_text}>Front-end</Text>
          <Text style={styles.card_content_text}>Back-end </Text>
        </Card>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1

  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
    color:'#939393',
    marginBottom:10

    }
});

export default App