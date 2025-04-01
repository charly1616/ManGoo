import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const MuscleScreen = ({ navigation }) => {
  const [muscles] = useState([
    "Back",
    "Cardio",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Neck",
    "Shoulders",
    "Upper arms",
    "Waist",
    "Upper legs",
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Escoge un Musculo</Text>
        </View>
        <View style={styles.gridCol}>
            {muscles.map((e, i) => {
            return (
                <TouchableOpacity
                style={[styles.optionButton]}
                key={i}
                >
                <Text style={styles.buttonText}>{e}</Text>
                </TouchableOpacity>
            );
            })}
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MuscleScreen;

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
    backgroundColor: "#FFD65A"
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
