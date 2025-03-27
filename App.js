import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform,NativeModules, Button, Linking } from 'react-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Speech from 'expo-speech';
const Stack = createNativeStackNavigator();

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
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la pantalla de inicio</Text>
    </View>
  );
};

const ProfileScreen = ({ route }) => {
  return <Text>Este es el perfil de {route.params.name}</Text>;
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Ir a Home" onPress={() => navigation.navigate('Home')} />
      <Image style={styles.image} source={require('./assets/ManGo-Angent.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          ¡Hola! <Text style={styles.highlightText}>SoyManGo</Text>, tu asistente deportivo personal. Si necesitas ayuda, solo toca el centro y háblame.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
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