import { ScrollView, Text, View, Image, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import { Continut } from "../../../Continut/ContinutEn.json";
import BLSButton from "../../../Componente/blsButtonEn";
const data = JSON.parse(JSON.stringify(Continut));

const Satan = (props) => {
  console.log("3_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.Satan.map((obj, index) => {
          if (
            obj ==
            'For too long, so many lies and so much misinformation have been spread about Satan. Many of us have seen him, have conversed with him, and have even been astrally touched by him. Nearly all of us who know him agree concerning his appearance. Enemy so-called "religions" have for far too long, written the book on how they believe him to appear, how they believe Demons to look and these are nothing but blasphemous lies. He is not red with horns and a tail, nor does he look like a Halloween monster. He does not have flaming red eyes or rubbery wings. These depictions are intended to insult, denigrate, and blaspheme him. [There are some lower orders of Demons. They are protectors and messengers who serve the higher-ranking Demons]. Here are images of how Satan appears to those of us who have seen him. Contrary to Satanism being labeled as "darkness," Satan appears wearing a long white robe identical to what he is shown wearing in the images below. He is the Top Leader of the Nordic Gods of the Empire of Orion. Many of us see him often and have a very close relationship with him. He is beautiful. His appearance is almost exactly as in the pictures, other than he rarely appears with wings.'
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  For too long, so many lies and so much misinformation have
                  been spread about Satan. Many of us have seen him, have
                  conversed with him, and have even been astrally touched by
                  him. Nearly all of us who know him agree concerning his
                  appearance. Enemy so-called "religions" have for far too long,
                  written the book on how they believe him to appear, how they
                  believe Demons to look and these are nothing but blasphemous
                  lies. He is not red with horns and a tail, nor does he look
                  like a Halloween monster. He does not have flaming red eyes or
                  rubbery wings. These depictions are intended to insult,
                  denigrate, and blaspheme him. [There are some lower orders of
                  Demons. They are protectors and messengers who serve the
                  higher-ranking Demons]. Here are images of how Satan appears
                  to those of us who have seen him. Contrary to Satanism being
                  labeled as "darkness," Satan appears wearing a long white robe
                  identical to what he is shown wearing in the images below. He
                  is the Top Leader of the Nordic Gods of the Empire of Orion.
                  Many of us see him often and have a very close relationship
                  with him. He is beautiful. His appearance is almost exactly as
                  in the pictures, other than he rarely appears with wings.
                </Text>
                <Image
                  source={require("../../../../assets/images/3-Satan/satan.png")}
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 400,
                    alignSelf: "center",
                  }}
                />
                <Image
                  source={require("../../../../assets/images/3-Satan/father_satan.png")}
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 300,
                    alignSelf: "center",
                    resizeMode: "contain",
                  }}
                />
              </View>
            );
          } else if (
            obj ==
            'Here is an old painting by Edward Burney from the epic of "Paradise Lost."'
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Here is an old painting by Edward Burney from the epic of
                  "Paradise Lost."
                </Text>
                <Image
                  source={require("../../../../assets/images/3-Satan/paradisul_pierdut.png")}
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 400,
                    alignSelf: "center",
                  }}
                />
              </View>
            );
          } else if (
            obj ==
            'Father Satan\'s Sigils. The Sigil with the ankh inside of the cup, symbolizes the cup with the elixir of life. This is the "Holy Grail" of immortality. The Holy Grail is the 666 Solar Chakra.'
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Father Satan's Sigils. The Sigil with the ankh inside of the
                  cup, symbolizes the cup with the elixir of life. This is the
                  "Holy Grail" of immortality. The Holy Grail is the 666 Solar
                  Chakra.
                </Text>
                <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                  <Image
                    source={require("../../../../assets/images/3-Satan/sigil_1.png")}
                    style={{
                      marginTop: 20,
                      width: 150,
                      height: 200,
                      resizeMode: "contain",
                    }}
                  />
                  <Image
                    source={require("../../../../assets/images/3-Satan/sigil_2.png")}
                    style={{
                      marginTop: 20,
                      width: 200,
                      height: 200,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            );
          } else if (
            obj ==
            "Here is a painting from \"Paradise Lost\" of Satan's Palace by John Martin."
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText}>
                  {"\u25CF" + " His Day is Monday."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" + " His Colors are Blue, Red, and Black"}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " He is the Sumerian God EA, also known as ENKI which means \"Lord of the Earth.\" He is also known as Melek Ta'us."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Animals that are sacred to him are the Peacock, the Serpent, the Goat, the Dragon and the Raven."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " His numbers are 13, 666 and 4. [666 is perfection and everlasting life]"}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " His Zodiac Signs are Aquarius, the Water Bearer and Capricorn, the Goat. [The Age of Aquarius is the Age for the advancement of humanity]."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " His Planets are Uranus and Venus [the Morning Star]."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" + " His Directions are both South and East."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " His most Important Day of the year is December 23, when the Sun is one degree into Capricorn. The day following the beginning of the Winter Solstice is his Personal Day, which should be observed by every dedicated Satanist. [This was dictated directly from him, personally]."}
                </Text>
                <Text style={look.baseText} key={obj + Math.random()}>
                Here is a painting from "Paradise Lost" of Satan's Palace by John Martin.
                </Text>
                <Image
                  source={require("../../../../assets/images/3-Satan/palace.png")}
                  style={{
                    marginTop: 20,
                    width: 400,
                    height: 200,
                    resizeMode: "contain",
                  }}
                />
              </View>
            );
          } else {
            return (
              <Text style={look.baseText} key={obj + Math.random()}>
                {obj}
              </Text>
            );
          }
        })}
      </View>
      <Text
        style={look.linkTextLightBlue}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Tree.html"
          );
        }}
      >
        Satan Created Humanity
      </Text>
      <Text
        style={look.linkTextLightBlue}
        onPress={() => {
          Linking.openURL(
            "https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Conversation.html"
          );
        }}
      >
        My Conversations with Satan
      </Text>
      <Text
        style={look.linkTextLightBlue}
        onPress={() => {
          Linking.openURL("https://www.joyofsatan.org/www.angelfire.com/empire/serpentis666/Name_of_Satan.html");
        }}
      >
        Origins of the Name of Satan
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Satan;
