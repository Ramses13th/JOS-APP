import { ScrollView, Text, Linking, View } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const SatanismAvansat = (props) => {
  console.log("18_nav_loaded");
  return (
    <ScrollView style={look.background}>
      {/* nested link in text */}
      <Text style={look.baseText}>
        <Text style={look.baseText}>
          From years of research, and guidance from our Beloved Father Satan, we
          have discovered the true origins of Satanism. We have come to the
          conclusion,
        </Text>

        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL(
              "https://satanslibrary.org/ExposingChristianity/EXPOSING_CHRISTIANITY_MAIN.html"
            );
          }}
        >
          {" "}
          knowing Judaism, Christianity and Islam to be unparalleled and
          viscious hoaxes upon humanity,
        </Text>
        <Text style={look.baseText}>
          {" "}
          that the claims these programs make in regards to the origins of
          humanity being in the Middle East are lies and cover-ups to further
          delude and confuse people as to the truth. Spiritual knowledge and
          teachings came to Egypt and Mesopotamia from the Far East.{" "}
        </Text>
      </Text>

      <Text style={look.baseText}>
        The Far East is also where Judaism and Christianity STOLE their
        doctrines from, after corrupting them and replacing them with imposter
        filth, with the goal to remove all spiritual knowledge from the
        populace, their trail of lies is replete with the murdered, the
        tortured, the damned and the spiritual degeneracy of humanity. More and
        more lies are necessary for these programs to cover up their stinking
        foundation of corpses, destruction of historical artifacts, and
        horrendous corruption.
      </Text>

      <Text style={look.baseText}>
        When doing any personal research/study on your own regarding the Far
        East disciplines, it is very important to remember that unfortunately,
        these have been heavily polluted with Christian filth and lies like just
        about everything else. The TRUE goal of Satanism [the root word/name
        "SAT" of 'all names and variations of Satan' means "TRUTH" in Sanskrit,
        which is one of the worlds oldest languages], is to advance our souls
        and to empower ourselves. Meaningless crap such as references to certain
        'morality' and 'personal conduct' should be weeded out as dross. These
        in truth have nothing whatsoever to do with obtaining the powers of the
        mind and soul. Knowledge and application of that knowledge is the only
        key.
      </Text>

      <View
        style={{
          backgroundColor: "#0F0000",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 20,
            marginHorizontal: 10,
            marginTop: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderColor: "cyan",
            borderWidth: 1,
            textAlign: "center",
          }}
        >
          <Text style={{ fontStyle: "italic", color: "grey" }}>
            "Right up to the thirteenth century, Yantra-Tantra practises thrived
            on a widespread basis in the whole of Eastern India. In the
            Thirteenth century, muslim invaders destroyed the famed universities
            and centres of learning of Yantra-Tantra and ruined thousands of
            volumes of literature in the form of books, manuscripts and icons.
            People practising the art of Yantra-Tantra were massacred and those
            who were able to save their lives escaped to South India, Assam and
            countries like Nepal, Tibet, Burma, Ceylon and Java. In more recent
            times, the Chinese invaders who plundered Tibet further destroyed
            the monasteries and literature of Yantra-Tantra." Reference: Power
            of Mantra and Yantra by P. Khurrana
          </Text>
        </Text>
      </View>

      <Text style={look.baseText}>
        As we can easily see from the above excerpt, Christianity and Islam are
        nothing more than formidable tools to destroy all true spirituality and
        replace it with false imposter lies and corruptions. Much has been
        destroyed. Satan leads us to the truth through our own study and through
        opening our souls and minds.
      </Text>
      <Text style={look.baseText}>
        <Text style={{ color: "indigo" }}>IMPORTANT!</Text>
        <Text>
          {" "}
          MOST OF THE TEACHINGS AND DOCTRINES OF THE ANCIENT RELIGIONS HAVE BEEN
          CORRUPTED. IGNORE THEM. THE EXERCISES, SUCH AS THOSE IN HATHA AND
          KUNDALINI YOGA, BREATHING EXERCISES, MARTIAL ARTS EXERCISES, ETC.,
          THESE ARE ANOTHER MATTER AND THEY ARE VERY POWERFUL IN RAISING THE
          SO-CALLED WITCHPOWER, VRIL, CHI. THIS IS THE ESSENCE OF SATANISM.{" "}
        </Text>
      </Text>

      {/* nested link in text */}

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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Origins_of_Satanism.html"
          );
        }}
      >
        The Far Eastern Origins of Satanism
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Yoga.html"
          );
        }}
      >
        MESSAGE FROM SATAN: IMPORTANT INFORMATION CONCERNING YOGA
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/ASHTAR.html"
          );
        }}
      >
        Astaroth's Eight-Fold Path of Advanced Empowerment - Updated 10/15/09
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Spiritual_Code_Words.html"
          );
        }}
      >
        Spiritual Code-Words
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/S_Resources.html"
          );
        }}
      >
        Resources [Books, DVD's, References]-Updated 10/15/09
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
          fontSize: 20,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Serpent_Yoga_Info.html"
          );
        }}
      >
        11/21/10: IMPORTANT INFORMATION ON SERPENT YOGA AND EXPOSING THE LIES IN
        THE MAINSTREAM YOGA DOCTRINES
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default SatanismAvansat;
