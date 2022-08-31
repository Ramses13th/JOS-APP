import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const ArmataIadului = (props) => {
  console.log("14_nav_loaded");
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
          Linking.openURL(
            "https://bucurialuisatan.com/mesaj-de-la-satan-despre-razboiul-spiritual/"
          );
        }}
      >
        Mesaj de la Satan despre Războiul Spiritual
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
          Linking.openURL(
            "https://bucurialuisatan.com/in-ceea-ce-priveste-razboiul-spiritual/"
          );
        }}
      >
        În ceea ce privește Războiul Spiritual
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
          Linking.openURL(
            "https://bucurialuisatan.com/program-de-formare-spirituala-pentru-satanisti/"
          );
        }}
      >
        Program de formare spirituală pentru Sataniști
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
          Linking.openURL(
            "https://bucurialuisatan.com/tactici-si-strategii-in-lupta-de-zi-cu-zi/"
          );
        }}
      >
        Tactici și strategii în Lupta de zi cu zi
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
          Linking.openURL("https://bucurialuisatan.com/forum/index.php");
        }}
      >
        Intră pe Forum
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default ArmataIadului;
