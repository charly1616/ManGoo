

import { StyleSheet, Text, View, Image } from 'react-native';


const ProfileScreen = ({ route }) => {
  return <Text>Este es el perfil de {route.params.name}</Text>;
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fondo más suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Espaciado general
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80, // Redondeado completo
    borderWidth: 5,
    borderColor: "#FFC91F",
  },
  textContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Sombra en Android
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Espaciado entre líneas
    color: '#333', // Color de texto principal
    textAlign: 'center', // Texto centrado
  },
  highlightText: {
    fontWeight: 'bold', // Texto en negrita
    color: '#FFA500', // Color naranja para resaltar
  },
});
