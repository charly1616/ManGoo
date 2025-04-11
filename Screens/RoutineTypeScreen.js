import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome6";



const RoutineTypeScreen = ({ navigation }) => {
  const [navs] = useState([
    ["PredRoutines", "Rutinas predeterminadas", "#FF9D23", "person-running"],
    ["PersRoutines", "Rutinas personalizadas", "#F93827", "users-rays"],
    ["Muscles", "Entrenar musculos", "#FFD65A", "dumbbell"],
    ["Exercises", "Todos los Ejercicios", "#16C47F", "list-ul"],
  ]);

  const [selected, setSelected] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Opciones Para Ejercitarte</Text>
        </View>
        
        <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 145}}></Button>

        <View style={styles.gridCol}>
          {navs.map((e, i) => {
            return (
              <TouchableOpacity
                style={[styles.optionButton, { backgroundColor: e[2] }]}
                onPress={() => navigation.navigate(e[0])}
                key={e[0]}
              >
                <Icon name={e[3]} size={75} color="#eee" />
                <Text style={styles.buttonText}>{e[1]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RoutineTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingBottom: 10,
  },
  titleView: {
    paddingInline: 20,
    paddingBottom: 15,
    paddingTop: 20,
    backgroundColor: "#303030",
  },
  titleText: {
    fontSize: 25,
    fontWeight: 400,
    color: "#ececec",
  },

  gridCol: {
    flex: 1, // Cada fila ocupa la mitad de la pantalla
    flexDirection: "column",
    gap: 10,
    paddingTop: 10,
    paddingInline: 10,
  },
  optionButton: {
    flex: 1, // Cada botón ocupa la mitad del ancho
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.1)",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
