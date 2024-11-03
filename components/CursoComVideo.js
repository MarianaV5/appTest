import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const CursoComVideo = () => {
  return (
    <View style={styles.container}>
      {/* Vídeo ajustado ao Container */}
      <Video
        source={{ uri: '../assets/videoplayback.mp4' }} // Caminho do vídeo local
        style={styles.video}
        resizeMode="contain" // Ajuste para que o vídeo se adapte ao container
        useNativeControls // Habilita os controles nativos de play/pause, etc.
      />

      {/* Campo para Opinião */}
      <Text style={styles.label}>Dê sua opinião sobre o curso:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Escreva aqui..."
        multiline
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <Button title="Anterior" onPress={() => { /* Ação do botão */ }} />
        <Button title="Certificado" onPress={() => { /* Ação do botão */ }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b3d9e4',
  },
  video: {
    width: '100%',      // Largura total do container
    height: 350,        // Altura fixa para o vídeo, ajustável conforme o necessário
    marginBottom: 20,
    backgroundColor: '#000', // Fundo preto para evitar áreas em branco
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CursoComVideo;
