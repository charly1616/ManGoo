import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import lightenColor from '../Utilities/Colors.js';
import { withNavigation } from '@react-navigation/native';

const tyles = ["#5ad98b", "#fe9f4d","#ff6464", "#ffdc4a"]
class ExerciseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Puedes agregar estado aquí si lo necesitas
    };
  }

  render() {
    const { type, object, navigation } = this.props;

    return (
      <TouchableOpacity 
        style={{display: 'flex', flexDirection: 'row', marginBottom: 10}} 
        key={object.name}
        onPress={()=>navigation.navigate("WorkExercise", object)}
      >
        <View style={{...styles.exerciseCard, backgroundColor: lightenColor(tyles[type], 45)}}>
          {/* Primera columna - Nombre y duración */}
          <View style={{...styles.columnCard, maxWidth: '40%'}}>
            <Text style={{...styles.nameText, color: tyles[type]}} numberOfLines={2}>
              {object.name}
            </Text>
            <View style={{...styles.targetMuscle, backgroundColor: tyles[type]}}>
              <Text style={styles.durationText}>10 min</Text>
            </View>
          </View>

          {/* Segunda columna - Músculos */}
          <View style={styles.columnCard}>
            <View style={{...styles.targetMuscle, backgroundColor: tyles[type]}}>
              <Text style={styles.targetText}>{object.target}</Text>
            </View>
            <View style={styles.secondaryMuscles}>
              {object.secondaryMuscles.slice(0,3).map((muscle, index) => (
                <Text 
                  key={index} 
                  style={{...styles.secondaryText, color: tyles[type]}}
                >
                  {muscle}
                </Text>
              ))}
            </View>
          </View>
        </View>
        
        {/* Tercer columna - Empezar */}
        <View style={{
          ...styles.columnCard,
          backgroundColor: tyles[type],
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 20
        }}>
          <Icon name="circle-play" color='#fff' size={40} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ExerciseCard;


const styles = StyleSheet.create({

    exerciseCard: {
      flex: 5,
      flexDirection: 'row',
      padding: 15,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      gap: 35,
      justifyContent: 'center'
    },
    columnCard: {
      flex: 1,
      justifyContent: 'space-between',
      alignContent: 'center'
    },
    nameText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      flexWrap: 'wrap',
    },
    durationText: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold'
    },
    targetMuscle: {
      borderRadius: 5,
      padding: 5,
      alignSelf: 'flex-start',
      marginBottom: 5,
      color: '#fff'
    },
    targetText: {
      fontSize: 12,
      color: '#fff'
    },
    secondaryMuscles: {
      flexDirection: 'column',
    },
    secondaryText: {
      fontSize: 12,
      marginBottom: 2,
    },
  });


