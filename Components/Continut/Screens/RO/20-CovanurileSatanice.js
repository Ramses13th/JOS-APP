import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const CovanurileSatanice = (props) => {
  console.log("6_nav_loaded");
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
            "https://bucurialuisatan.com/ghid-bazic-pentru-covanurile-satanice/"
          );
        }}
      >
        Ghid bazic pentru covanurile satanice
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/ceremonia-de-initiere-intr-un-covan/"
          );
        }}
      >
        Ceremonia de inițiere într-un covan
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/sabaturile-si-esbaturile/"
          );
        }}
      >
        Sabaturile și Esbaturile
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/meditatii-in-grup-pentru-covan/"
          );
        }}
      >
        Meditații în grup pentru covan
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/mai-multe-sfaturi-pentru-conducerea-unui-covan-satanic/"
          );
        }}
      >
        Mai multe sfaturi pentru conducerea unui covan satanic
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/conul-satanic-de-putere/"
          );
        }}
      >
        Conul satanic de putere
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default CovanurileSatanice;
