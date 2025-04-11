import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import exerciseData from '../../Services/Exercises.json' with { type: 'json' };
import exerciseCard from "../../Components/ExerciseCard";

const MuscleScreen = ({ navigation }) => {
  const [muscles] = useState([
    "Espalda",
    "Cardio",
    "Pecho",
    "Lower arms",
    "Lower legs",
    "Cuello",
    "Hombros",
    "Upper arms",
    "Cintura",
    "Upper legs",
  ]);

  const [selected, setSelected] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const v = exerciseData.filter(e => e.bodyPart == selected).slice(0, 20);
    setExercises(v);
  }, [selected]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {selected
              ? `Ejercicios para ${muscles.find(m => m.toLowerCase() === selected)}`
              : "Escoge un Musculo"}
          </Text>
        </View>
        <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 145}}></Button>

        {exercises.length > 0 ? (
          <ScrollView contentContainerStyle={styles.gridCol}>
            {exercises.map((v, i) => {
              return exerciseCard({ type: Math.floor(Math.random() * 4), object: v });
            })}
          </ScrollView>
        ) : (
          <View style={{ ...styles.gridCol, height: "85%" }}>
            {muscles.map((e, i) => {
              return (
                <TouchableOpacity
                  style={[styles.optionButton]}
                  key={i}
                  onPress={() => { setSelected(e.toLowerCase()); }}
                >
                  <Text style={styles.buttonText}>{e}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
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
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    paddingTop: 10,
    paddingInline: 10,
  },
  optionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#FFD65A",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
