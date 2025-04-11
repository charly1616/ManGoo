import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useRoute } from '@react-navigation/native';

const exerciseButtonSimple = ({object, isDone}) =>{
    const nav = useNavigation();

    return <TouchableOpacity activeOpacity={isDone? 0.4 : 1} style={{padding: 5, display: 'flex', flexDirection: 'row', gap: 10, opacity: isDone ? 0.5 : 1}}
    onPress={()=>nav.navigate("WorkExercise", object)}
    disabled={isDone}
    key={object.name}>
        <View style={{padding: 15, paddingLeft: 30, backgroundColor: "#f88", borderRadius:10, flex: 10,}}>
            <Text numberOfLines={1}  style={{fontSize: 18, color: '#fff', fontWeight: 500,}}>{object.name}</Text>
        </View>
        {/* DONE ICON */}
        
        {(isDone) ?
            <View style={{backgroundColor: '#16C47F', borderRadius: 10, padding: 10, flex:1, justifyContent: 'center'}}>
                <Icon name="check" size={25} color="#fff" />
            </View> : <></>
        }
    </TouchableOpacity>
}


const WorkRoutineScreen = ({ navigation, name, exercisePool }) => {
    const [exercises, setExercises] = useState(exercisePool?.map((e) => [e, false]) ||
    [[{name:"Exercise1"}, true],[{name:"Exercise2"}, true],[{
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/Nulc7ZLGbqFn7H",
        "id": "0011",
        "name": "assisted hanging knee raise",
        "target": "abs",
        "secondaryMuscles": [
          "hip flexors"
        ],
        "instructions": [
          "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
          "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
          "Pause for a moment at the top of the movement, squeezing your abs.",
          "Slowly lower your legs back down to the starting position.",
          "Repeat for the desired number of repetitions."
        ]
      }, false],[{name:"Exercise4"}, false],[{name:"Exercise5"}, false]])


    const handleNextExercise = () => {
        let remaining = exercises.filter( e => !e[1])
        if (remaining.length > 0) navigation.navigate("WorkExercise", remaining[0][0])
    }

  return <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/*SORT OF TITLE */}
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{name || "<Nombre de rutina>"}</Text>
                </View>
                {/*GO BACK BUTTON */}
                <Button title="Atrás" onPress={() => navigation.goBack()} style={{minHeight: 120, maxHeight: 120}}></Button>
                {/*LIST OF EXERCISES */}
                <ScrollView style={{height:'100%', display: 'flex', flexDirection: 'column', padding: 12}}>
                    {exercises.map((e) => exerciseButtonSimple({object: e[0],isDone: e[1]})
                    )}
                </ScrollView>

                {/*NEXT EXERCISE BUTTON */}
                <TouchableOpacity onPress={() => handleNextExercise()} style={{minHeight: 80, maxHeight: 80, backgroundColor: '#2dc75c', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 25, fontWeight: 500}}>Siguiente</Text>
                </TouchableOpacity>
            </SafeAreaView>
      </SafeAreaProvider>;
};

export default WorkRoutineScreen;



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
      justifyContent: 'space-between',
      gap: 10,
      paddingTop: 10,
      paddingInline: 10
    },
    
  });
  