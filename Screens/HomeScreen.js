import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

const HomeScreen = ({ navigation }) => {
  const [navs] = useState([
    ["Instructions", "Cómo usar", "#16C47F"],
    ["Configuration", "Configuración", "#FFD65A"],
    ["Routines", "Empezar rutina", "#FF9D23"],
    ["History", "Historial", "#F93827"]
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.gridRow}>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[0][2] }]}
          onPress={() => navigation.navigate(navs[0][0])}
        >
          <Text style={styles.buttonText}>{navs[0][1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[1][2] }]}
          onPress={() => navigation.navigate(navs[1][0])}
        >
          <Text style={styles.buttonText}>{navs[1][1]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridRow}>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[2][2] }]}
          onPress={() => navigation.navigate(navs[2][0])}
        >
          <Text style={styles.buttonText}>{navs[2][1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, { backgroundColor: navs[3][2] }]}
          onPress={() => navigation.navigate(navs[3][0])}
        >
          <Text style={styles.buttonText}>{navs[3][1]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  gridRow: {
    flex: 1, // Cada fila ocupa la mitad de la pantalla
    flexDirection: 'row',
  },
  optionButton: {
    flex: 1, // Cada botón ocupa la mitad del ancho
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});