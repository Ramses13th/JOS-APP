import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const DoctrineleLuiSatan = (props) => {
  console.log("6_nav_loaded");
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
          fontStyle: 'italic'
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/yezidii-inchinatorii-lui-satan-din-irak/");
        }}
      >
        Yazidii, închinătorii lui Satan din Irak
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
          fontStyle: 'italic'
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/al-jilwah/");
        }}
      >
        Al-Jilwah
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default DoctrineleLuiSatan;
