import { ScrollView, Text, Linking, Image } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const Vrajitorie = (props) => {
  console.log("17_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* image */}
      <Image
        source={require("../../../../assets/images/17-Vrajitorie/Elements.gif")}
        style={{ height: 300, width: 300, marginTop: 20, alignSelf: "center" }}
        resizeMode="contain"
      />
      {/* image */}
      <Text style={look.baseText}>
        Magick, sorcery, spells, witchcraft, etc., are all powers of the mind.
        The success of any working depends upon the strength and power of the
        operator's mind, aura, mental concentration and his/her ability to sense
        and direct energy. Understanding energy, discerning between different
        energies, invoking, evoking, and directing energy is the foundation of
        all "magick".
      </Text>

      {/* nested link in text */}
      <Text style={look.baseText}>
        <Text style={look.baseText}>This comes through </Text>

        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL(
              "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Satanic_Meditation.html"
            );
          }}
        >
          {" "}
          POWER MEDITATION.
        </Text>
        <Text style={look.baseText}>
          {" "}
          How diligently and consistently one applies one's self to a program of
          power meditation will determine how powerful one's workings are.
          People who are new are encouraged to start out with white and grey
          magick, as black magick requires more knowledge and skill. Some people
          are born with a gift for this, but for others, this comes in time.{" "}
        </Text>
      </Text>
      {/* nested link in text */}
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
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Foundation_of_Magick.html"
          );
        }}
      >
        PLEASE TAKE THE TIME TO READ THIS ARTICLE CONCERNING SPELLS AND MAGICK
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
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Satanic_Witchcraft_Index.html"
          );
        }}
      >
        SATANIC WITCHCRAFT INDEX
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
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Satanic_Magick.html"
          );
        }}
      >
        Magick
      </Text>

      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Vrajitorie;
