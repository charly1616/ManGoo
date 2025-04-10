import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const WorkExerciseScreen = ({ navigation }) => {
  const route = useRoute();
  const [exercise] = useState(route.params);
  //console.log("Se recibiò",route.params)
  const [time] = useState(10);
  const [seconds, setSeconds] = useState(21);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    } else if (seconds <= 0){
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{exercise.name}</Text>
        </View>
        <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 145}}></Button>
        <View style={styles.ImageContainer}>
          {!exercise?.gifUrl?
          <Image
            style={{width: '80%', height: '80%', resizeMode: 'contain' }}
            source={require("../../assets/Missing.jpg")}/>
          :
          <WebView
            originWhitelist={['*']}
            source={{ html: '<img style="width:90%;" src='+exercise?.gifUrl+' />' }}
            style={{ width: 350, maxHeight: 350 }}
          />
          }
          <Text>{seconds}</Text>

        </View>      
        <View style={{display: 'flex', flexDirection: 'row', alignItems:'stretch', justifyContent: 'center', gap: 10}}>
          <TouchableOpacity onPress={()=>setIsRunning(!isRunning)} style={{...styles.Button, backgroundColor: '#16C47F'}}>
            <Icon name={isRunning?"pause":"play"} size={75} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.Button, backgroundColor: '#FF9D23'}}>
            <Icon name="forward-step" size={75} color="#fff" />
          </TouchableOpacity>
        </View>   
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WorkExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingBottom: 10,
  },

  ImageContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    padding: 10,
    alignItems: 'center',
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
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 10,
    paddingInline: 10
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
