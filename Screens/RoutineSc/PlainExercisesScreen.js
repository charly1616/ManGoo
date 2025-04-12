import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import exerciseData from '../../Services/Exercises.json' with { type: 'json' };
import ExerciseCard from "../../Components/ExerciseCard";


const PlainExScreen = ({ navigation }) => {
    const [Exs, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //alert(exerciseData)
        setData(exerciseData)
        setLoading(false);
    }, []);



  return <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Tu Asistente deportivo</Text>
          </View>
  
          <ScrollView style={styles.gridCol}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error: {error}</Text>}
            {
              (Exs !== null && Exs !== undefined) && Exs.slice(0,15).map( (v,i) => {
                return <ExerciseCard type= {Math.floor(Math.random() * 4)} object= {v} navigation={navigation} key={v.id}/>
              })
              }
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>;
};

export default PlainExScreen;


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
  
