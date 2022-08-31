import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import look from "../../../BaseStyle/Style";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#090000",
      }}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/images/bls.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.containerCitat}>
          <Text style={styles.citat}>
            „NU EXISTĂ ALT DUMNEZEU ÎN AFARĂ DE MINE.” „CUNOSCÂND ACEST LUCRU,
            CINE ÎNDRĂZNEȘTE SĂ DEA ÎNCHINARE FALSULUI DUMNEZEU AL CORANULUI ȘI
            AL BIBLIEI?” — Satan în Qu’ret Al-Yezid
          </Text>
          <Text
            style={look.linkTextRed}
            onPress={() => {
              Linking.openURL("https://bucurialuisatan.com/forum/index.php");
            }}
          >
            https://bucurialuisatan.com/forum/index.php
          </Text>
          <Text
            style={look.linkTextBlue}
            onPress={() => {
              Linking.openURL("https://bucurialuisatan.com/");
            }}
          >
            https://bucurialuisatan.com/
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buton}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("ro-main");
        }}
      >
        <Text style={{ fontFamily: "serif", fontSize: 18, color: "#fff" }}>
          AFLA ADEVARUL
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// first screen styles
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
  },
  buton: {
    backgroundColor: "#242424",
    paddingVertical: 20,
    paddingHorizontal: "20%",
    borderRadius: 20,
  },
  citat: {
    fontSize: 11,
    paddingHorizontal: 20,
    fontStyle: "italic",
    borderTopColor: "white",
    borderBottomColor: "white",
    borderWidth: 0.6,
    paddingVertical: 10,
    borderStyle: "dashed",
    color: "#fff",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerCitat: {
    marginBottom: 300,
  },
});
