import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const DoctrineleLuiSatan = (props) => {
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
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/SERMONS.html"
          );
        }}
      >
        High Priestess Maxine Dietrich's Sermons
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
          Linking.openURL("https://satanslibrary.org/Pdf_Library.html");
        }}
      >
        High Priest Hooded Cobra 666 Sermons [Satan's Library]
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
            "https://web.archive.org/web/20160116113149/https://hailtosatansvictory666.angelfire.com/index.html"
          );
        }}
      >
        High Priest Micama Gmicalzoma's Sermons
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
          Linking.openURL("https://satanslibrary.org/index.html");
        }}
      >
        High Priestess Zildar Raasi's Sermons [Satan's Library]
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
          Linking.openURL("https://www.alegriadeenki.com/");
        }}
      >
        High Priestess Myla Limlal: Alegria de los Ministerios de Satan's
        [Espanol]
      </Text>

      <Text style={look.baseText}>
        Many more sermons from all of the JoS Ministry can be found at Satan's
        Library. There are too many to link here individually. In addition,
        updates are posted there regularly. Please visit the website listed
        below:
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
          Linking.openURL("https://satanslibrary.org/index.html");
        }}
      >
        Satan's Library - Free PDFs, Audio Sermons, and links to YouTube Semons
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
          Linking.openURL("https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Groups.html");
        }}
      >
        For our forums and groups, Click Here
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default DoctrineleLuiSatan;
