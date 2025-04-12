import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState,useRef, useCallback } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';


const tyles = ["#5ad98b", "#fe9f4d","#ff6464", "#ffdc4a"]

const RoutineScreen = ({ navigation, routine }) => {
  const route = useRoute();
  const [exercises, setExercises] = useState([])
  

  useEffect(() => {
    const ID = route.params?.routine || [];
    //alert(JSON.stringify(ID))
    setExercises(ID);
  },[])

  return <SafeAreaProvider>
              <SafeAreaView style={styles.container}>
                  {/*SORT OF TITLE */}
                  <View style={styles.titleView}>
                      <Text style={styles.titleText}>{"Lista de rutinas"}</Text>
                  </View>
                  {/*GO BACK BUTTON */}
                  <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 120, maxHeight: 120}}></Button>
                  {/*LIST OF EXERCISES */}
                  <ScrollView style={{height:'100%'}}>
                    <View style={{display: 'flex', flexDirection: 'column', gap: 10,height:'100%', padding: 12}}>
                      {
                      exercises.map((e,i) => <TouchableOpacity key={e.id} style={{...styles.optionButton, backgroundColor: tyles[i%4]}}
                        onPress={()=> navigation.navigate("WorkRoutine", {routine:e})}>
                        <Text style={styles.buttonText}>{e.name}</Text>
                      </TouchableOpacity>
                      )
                      }
                    </View>
                      
                  </ScrollView>
              </SafeAreaView>
        </SafeAreaProvider>;
};

export default RoutineScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    height: '100%'
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

  Button: {
    flex: 3,
    padding:20,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridCol: {
    flexDirection: "column",
    gap: 10,
    paddingTop: 10,
    paddingInline: 10
  },
  optionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 15,
  },buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});