import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const Meditatii = (props) => {
  console.log("16_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text style={look.baseText}>
        "Fools do not know what they are doing. Energy is being sent up. It
        should go into the earth to replenish her. The overuse of the point-up
        pentagram is throwing the energies into space,causing a number of
        problems, and draining the earth of her ability to defend herself
        against these problems." -Satan/Lucifer {"\n\n"}This has to do with the
        soul and how the New Age movement keeps urging followers to focus solely
        on the higher chakras. Each chakra has a male and female pair and both
        work together. There must be balance in both the higher and lower
        chakras.
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Expect.html"
          );
        }}
      >
        IMPORTANT INFORMATION ON POWER MEDITATION
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
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/TheMind.html"
          );
        }}
      >
        ABOUT THE MIND
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
          Linking.openURL("https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Satanic_Meditation.html");
        }}
      >
        POWER MEDITATIONS
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Meditatii;
