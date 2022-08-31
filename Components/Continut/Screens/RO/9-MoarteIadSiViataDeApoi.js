import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const MoarteIadSiViataDeApoi = (props) => {
  console.log("9_nav_loaded");
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
          Linking.openURL("https://bucurialuisatan.com/moarte-iad-si-viata-de-apoi/");
        }}
      >
        Adevărul despre „Iad”
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
          Linking.openURL("https://bucurialuisatan.com/fantomele/");
        }}
      >
        Fantomele
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default MoarteIadSiViataDeApoi;
