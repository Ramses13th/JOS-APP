import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const Demonii = (props) => {
  console.log("4_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* Link normal*/}
      <Text
        style={{
          textAlign: "center",
          color: "#4BB4FF",
          textDecorationLine: "underline",
          paddingTop: 30,
          letterSpacing: 1,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/AllDemons.html"
          );
        }}
      >
        Demons, the Gods of Hell
      </Text>

      <Text style={look.baseText}>This section will be updated soon.</Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Demonii;
