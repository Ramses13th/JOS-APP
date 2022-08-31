import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Ritualuri = (props) => {
  console.log("15_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text
        style={{
          textAlign: "center",
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
          Linking.openURL("https://bucurialuisatan.com/ceremonii-satanice/");
        }}
      >
        Ceremonii satanice
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/sarbatorile-satanice/");
        }}
      >
        Sărbătorile satanice
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/ritualuri-satanice/");
        }}
      >
        Ritualuri
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/enochiana/");
        }}
      >
        Enochiana, limba Demonilor
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/altare-satanice/");
        }}
      >
        Altare satanice
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Ritualuri;
