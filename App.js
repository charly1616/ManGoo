import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform,NativeModules, Button, Linking } from 'react-native';

import * as Speech from 'expo-speech';

//const speak = (text) => {
//  Speech.speak(text, {
//    language: 'es-ES',
//    rate: 0.8,
//    pitch: 1.1
//  });
//};

import Tts from 'react-native-tts';



// Hablar texto
const speak = (text) => {
  Tts.speak('Hello, world!', {
    androidParams: {
      KEY_PARAM_PAN: -1,
      KEY_PARAM_VOLUME: 0.5,
      KEY_PARAM_STREAM: 'STREAM_MUSIC',
    },
  });
};



export default function App() {
  

  return (
    <View style={styles.container}>
      <Button title="Hola" onPress={()=>speak("Hola todo mundo como andan")}>
        <Text>Dame click</Text>
      </Button>
      <Image 
        style={styles.image} 
        source={require('./assets/ManGo-Angent.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ¡Hola! <Text style={styles.highlightText}>SoyManGo</Text>, tu asistente deportivo personal. Si necesitas ayuda, solo toca el centro y háblame.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fondo más suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Espaciado general
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80, // Redondeado completo
    borderWidth: 5,
    borderColor: "#FFC91F",
  },
  textContainer: {
    marginTop: 20, // Espaciado entre la imagen y el texto
    padding: 15, // Espaciado interno
    backgroundColor: '#fff', // Fondo blanco para el texto
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000', // Sombra para el contenedor de texto
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Sombra en Android
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Espaciado entre líneas
    color: '#333', // Color de texto principal
    textAlign: 'center', // Texto centrado
  },
  highlightText: {
    fontWeight: 'bold', // Texto en negrita
    color: '#FFA500', // Color naranja para resaltar
  },
});