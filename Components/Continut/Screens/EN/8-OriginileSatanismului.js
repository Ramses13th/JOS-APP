import {
  ScrollView,
  Linking,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const OriginileSatanismului = (props) => {
  console.log("8_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          marginTop: 15,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://satanslibrary.org/666BlackSun/Origins-of-Satanism.html"
          );
        }}
      >
        PART 1: THE ORIGINS OF SATANISM
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          marginTop: 15,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Satanism_Sanskrit.html"
          );
        }}
      >
        PART 2: THE EARLIEST ORIGINS OF SATANISM ARE IN THE FAR EAST
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          marginTop: 15,
          letterSpacing: 1,
          marginLeft: 20,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://satanslibrary.org/666BlackSun/Satanism_Eastern_Origins.html"
          );
        }}
      >
        PART 3: THE EARLIEST ORIGINS OF SATANISM ARE IN THE FAR EAST II
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default OriginileSatanismului;
