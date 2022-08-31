import { ScrollView, Text, Linking, Image } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Incepatorii = (props) => {
  console.log("12_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* image */}
      <Image
        source={require("../../../../assets/images/12-Incepatorii/Altar.jpg")}
        style={{ height: 300, width: 300, marginTop: 20, alignSelf: "center" }}
        resizeMode="contain"
      />
      {/* image */}
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
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/introducere-in-satanism/"
          );
        }}
      >
        INTRODUCERE ÎN SATANISMUL SPIRITUAL
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/la-ce-te-poti-astepta/");
        }}
      >
        La ce te poți aștepta …
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/sacramentele-satanice/");
        }}
      >
        Sacramentele satanice
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/puterile-mintii-si-ale-sufletului/"
          );
        }}
      >
        MAGIE 1001: VRĂJITORIE – PUTERILE MINȚII ȘI ALE SUFLETULUI
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/trei-pasi-ai-vrajitoriei/"
          );
        }}
      >
        MAGIE 1001: TREI PAȘI AI VRĂJITORIEI
      </Text>
      <Text
        style={{
          textAlign: "left",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 10,
          letterSpacing: 1,
          marginLeft: 20,
          marginTop: 15,
          marginRight: 10,
          fontSize: 22,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/ritualul-standard/");
        }}
      >
        Ritualul standard
      </Text>

      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Incepatorii;
