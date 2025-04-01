import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const MainScreen = ({ navigation }) => {
  const fullText =
    "¡Hola! Soy ManGo, tu asistente deportivo personal. Si necesitas ayuda, solo toca el centro y háblame.";
  const words = fullText.split(" ");
  const [displayedText, setDisplayedText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentIndex < words.length && ! loading) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, words[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1000 / words.length); 

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFD65A" />
      {loading ? (
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/ManGo_Logo.png")}
          />
          <ActivityIndicator color={"#FFC91F"} style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} size={"large"} />
        </View>
      ) : (
        <>
          
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.image}
              source={require("../assets/ManGo_Angent.png")}
            />
          </TouchableOpacity>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {displayedText
                .join(" ")
                .slice(0, displayedText.join(" ").indexOf("Soy ManGo"))}

              <Text style={styles.highlightText}>
                {displayedText.includes("SoyManGo") ? "" : "Soy ManGo"}
              </Text>
              {displayedText
                .join(" ")
                .slice(
                  displayedText.join(" ").indexOf("Soy ManGo") + 9,
                  displayedText.join(" ").length - 1
                )}
              {currentIndex < words.length && (
                <Text style={styles.highlightText}>...</Text>
              )}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Fondo más suave
    alignItems: "center",
    justifyContent: "center",
    padding: 20, // Espaciado general
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 300, // Redondeado completo
    borderWidth: 5,
    borderColor: "#FF9D23",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 260,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Sombra en Android
  },
  text: {
    fontSize: 12,
    lineHeight: 18, // Espaciado entre líneas
    color: "#333", // Color de texto principal
    textAlign: "center", // Texto centrado
  },
  highlightText: {
    fontWeight: "bold", // Texto en negrita
    color: "#FF9D23", // Color naranja para resaltar
  },
});
