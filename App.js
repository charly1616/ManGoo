import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform,NativeModules, Linking } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from "./Screens/HomeScreen.js"
import ProfileScreen from "./Screens/ProfileScreen.js"
import MainScreen from "./Screens/MainScreen.js"

import InstructionScreen from "./Screens/InstructionScreen.js"
import ConfigScreen from './Screens/HistoryScreen.js';
import RoutineScreen from "./Screens/RoutineSc/RoutineScreen.js";
import HistoryScreen from './Screens/InstructionScreen.js';
import RoutineTypeScreen from './Screens/RoutineTypeScreen.js';

import MuscleScreen from './Screens/RoutineSc/MusclesScreen.js';
import PlainExScreen from './Screens/RoutineSc/PlainExercisesScreen.js';

import WorkExerciseScreen from './Screens/RoutineSc/WorkExerciseScreen.js';
import WorkRoutineScreen from './Screens/RoutineSc/WorkRoutineScreen.js';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: 'ManGo' }} />

        <Stack.Screen name="Instructions" component={InstructionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Configuration" component={ConfigScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ChooseRoutines" component={RoutineTypeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false}} />
        
        <Stack.Screen name="PredRoutines" component={RoutineScreen} options={{ headerShown: false}} />
        
        <Stack.Screen name="Exercises" component={PlainExScreen} options={{ headerShown: false}} />
        <Stack.Screen name="WorkExercise" component={WorkExerciseScreen} options={{ headerShown: false}} />
        <Stack.Screen name="WorkRoutine" component={WorkRoutineScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Muscles" component={MuscleScreen} options={{ headerShown: false}} />
        

      </Stack.Navigator>
    </NavigationContainer>
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



export default App;