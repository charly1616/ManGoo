import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState,useRef, useCallback } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useRoute } from '@react-navigation/native';


const useDoublePress = (onSinglePress, onDoublePress, delay = 200) => {
  const pressCount = useRef(0);
  const timer = useRef(null);

  return useCallback(() => {
    pressCount.current += 1;

    if (pressCount.current === 1) {
      timer.current = setTimeout(() => {
        // Si no hubo segundo press en el tiempo límite
        if (typeof onSinglePress === 'function') {
          onSinglePress();
        }
        pressCount.current = 0;
      }, delay);
    } else if (pressCount.current === 2) {
      // Si hubo double press
      clearTimeout(timer.current);
      if (typeof onDoublePress === 'function') {
        onDoublePress();
      }
      pressCount.current = 0;
    }
  }, [onSinglePress, onDoublePress, delay]);
};

const WorkExerciseScreen = ({ navigation }) => {
  const route = useRoute();
  const [exercise] = useState(route?.params || {name: "Ejercicio no encontrado",
    instructions: [
      "Depone telephonum in solo et curre velociter.",
      "Noli umquam reverti et obliviscere te telephonum habuisse.",
      "Vive vitam sine technologia et sollicitudinibus, habens quattuor liberos et tria animalia domestica.",
      "Lente demitte crura ad positionem initialem.",
      "Repete pro numero repetitionum desiderato."
    ],
    time: 121});
  //console.log("Se recibiò",route.params)
  const [seconds, setSeconds] = useState(exercise?.time || 120);
  const [isRunning, setIsRunning] = useState(false);

  const [instructionNumber, setInsNum] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  //FUNCION PARA CAMBIAR DE INSTRUCCION
  const handleNextInstruction = () => {
    if (instructionNumber+1 < exercise.instructions.length) {
      setInsNum(instructionNumber + 1)
      setAutoAdvance(true);
      setIsRunning(false);
    } else {
      setAutoAdvance(false);
      setIsRunning(true)
    }
  }

  //TEMPORIZADOR PARA AUTOPASAR
  useEffect(() => {
    let intervalId;
    if (autoAdvance) {
      intervalId = setInterval(handleNextInstruction, exercise.instructions[instructionNumber].length * 100);
    }
    return () => clearInterval(intervalId);
  }, [autoAdvance, handleNextInstruction]);


  // TEXT TO SPEECH PARA DECIR INSTRUCCIONES
  useEffect(()=>{

  }, [instructionNumber])


  //FUNCION PARA MANEJAR SINGLE Y DOBLE CLICK
  const restartInstructions = useDoublePress(handleNextInstruction,()=>{setInsNum(0);setAutoAdvance(true)})


  //TEMPORIZADOR DEL EJERCICIO
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
        {/*SORT OF TITLE */}
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{exercise.name}</Text>
        </View>
        {/*GO BACK BUTTON */}
        <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 120, maxHeight: 120}}></Button>

        <TouchableOpacity style={{...styles.ImageContainer, minHeight: 360,maxHeight: 360,justifyContent: 'center' }} onPress={restartInstructions}
          accessibilityLabel="Siguiente instruccion, doble para reiniciar"
        >
          {/*INSTRUCTION NUMBER */}
          <View style={{backgroundColor:'#419', borderRadius:300, padding: 10, height:80, width:80, display: 'flex', justifyContent: 'center'}}>
            <Text style= {{textAlign: 'center', color: "#fff", fontSize: 30, fontWeight: 600}}>{instructionNumber+1}</Text>
          </View>
          {/*INSTRUCTION TEXT */}
          <View style={{borderColor: "#508", padding: 20,}}>
            <Text style= {{textAlign: 'center',  fontSize: 26, fontWeight: 400}}>
              {exercise.instructions[instructionNumber]}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.ImageContainer} accessibilityLabel="Tiempo restante">
          <Text style= {{textAlign: 'center',  fontSize: 50, fontWeight: 300}}>{(seconds/60<10)&&0}{Math.floor(seconds/60)}:{(seconds%60<10)&&0}{seconds%60}</Text>
        </View>

        
        <View style={{display: 'flex', flexDirection: 'row', alignItems:'stretch', justifyContent: 'center', gap: 10}}>
          {/*PAUSE BUTTON*/}
          <TouchableOpacity onPress={()=>setIsRunning(!isRunning)} style={{...styles.Button, backgroundColor: '#16C47F'}} accessibilityLabel="Pausar">
            <Icon name={isRunning?"pause":"play"} size={75} color="#fff" />
          </TouchableOpacity>
          {/*SKIP BUTTON*/}
          <TouchableOpacity style={{...styles.Button, backgroundColor: '#FF9D23'}} accessibilityLabel="Terminar ejercicio">
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
