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
          source={require("../../../../assets/enIcon.gif")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.containerCitat}>
          <Text style={styles.citat}>
            "THERE IS NO GOD BUT MYSELF" "KNOWING THIS, WHO DARES WORSHIP THE
            FALSE GODS OF THE KORAN AND BIBLE?" - SATAN FROM THE QU'RET AL-YEZID
          </Text>
          <Text
            style={look.linkTextRed}
            onPress={() => {
              Linking.openURL("https://ancient-forums.com/");
            }}
          >
            https://ancient-forums.com/
          </Text>
          <Text
            style={look.linkTextBlue}
            onPress={() => {
              Linking.openURL("https://www.joyofsatan.org/");
            }}
          >
            https://www.joyofsatan.org/
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buton}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("en-main");
        }}
      >
        <Text style={{ fontFamily: "serif", fontSize: 18, color: "#fff" }}>
          EXPLORE THE TRUTH
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
