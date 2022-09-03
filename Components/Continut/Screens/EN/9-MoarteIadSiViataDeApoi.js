import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

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
          Linking.openURL("https://satanslibrary.org/666BlackSun/Hell.html");
        }}
      >
        The Truth About "Hell"
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
          Linking.openURL("https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Ghosts.html");
        }}
      >
        Ghosts
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default MoarteIadSiViataDeApoi;
