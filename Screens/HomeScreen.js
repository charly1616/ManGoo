import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React, { useState } from "react";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';

const HomeScreen = ({ navigation }) => {
  const [navs] = useState([
    ["ChooseRoutines", "Empezar rutina", "#FF9D23",],
    ["History", "Historial", "#F93827"],
    ["Instructions", "Cómo usar", "#16C47F"],
    ["Configuration", "Configuración", "#FFD65A"],
  ]);

  return (
    <SafeAreaProvider>
      
      <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Menu Asistente Deportivo</Text>
      </View>
        
      <View style={styles.gridRow}>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[0][2] }]}
          onPress={() => navigation.navigate(navs[0][0])}
        >
          <Icon name="dumbbell" size={75} color="#eee" />
          <Text style={styles.buttonText}>{navs[0][1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[1][2] }]}
          onPress={() => navigation.navigate(navs[1][0])}
        >
          <Icon name="calendar-days" size={75} color="#eee" />
          <Text style={styles.buttonText}>{navs[1][1]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridRow}>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[2][2] }]}
          onPress={() => navigation.navigate(navs[2][0])}
        >
          <Icon name="question" size={75} color="#eee" />
          <Text style={styles.buttonText}>{navs[2][1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[3][2] }]}
          onPress={() => navigation.navigate(navs[3][0])}
        >
          <Icon name="gear" size={75} color="#eee" />
          <Text style={styles.buttonText}>{navs[3][1]}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingBottom: 10,
  },
  titleView: {
    paddingInline: 20,
    paddingBottom: 15,
    paddingTop: 20,
    backgroundColor: "#303030"
  },
  titleText: {
    fontSize: 25,
    fontWeight: 400,
    color: "#ececec"
  },

  gridRow: {
    flex: 1, // Cada fila ocupa la mitad de la pantalla
    flexDirection: 'row',
    gap: 10,
    paddingTop: 10,
    paddingInline: 10,
  },
  optionButton: {
    flex: 1, // Cada botón ocupa la mitad del ancho
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});