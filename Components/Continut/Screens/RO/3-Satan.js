import { ScrollView, Text, View, Image, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import { Continut } from "../../../Continut/ContinutRo.json";
import BLSButton from "../../../Componente/blsButton";
const data = JSON.parse(JSON.stringify(Continut));

const Satan = (props) => {
  console.log("3_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <View style={look.baseContainer}>
        {data.Satan.map((obj, index) => {
          if (
            obj ==
            "Pentru prea multă vreme, prea multe informații neadevărate au fost răspândite despre Satan. Mulți dintre noi l-au văzut, au stat de vorbă cu el și au fost atinși de acesta în astral. Fiecare dintre noi care îl cunosc, cad de acord în ceea ce privește înfățișarea lui. Religiile de dreapta, pentru prea mult timp, au scris cărți despre felul în care ei cred că el se înfățișează, despre felul în care ei cred că Demonii arată; acestea nu sunt decât minciuni blasfematoare. El nu este roșu, cu coarne și coada și nici nu arată precum monștrii de Halloween. Satan nu are ochii roșii învăpăiați și nici aripi cauciucate. Aceste descrieri sunt menite să-l insulte, denigreze și să îl hulească. În continuare sunt prezentate câteva imagini despre cum s-a înfățișat Satan celor care l-au văzut. În mod contrar afirmațiilor conform cărora satanismul ar fi „întunecat,” Satan apare îmbrăcat într-o robă albă și strălucitoare, identică cu cea purtată de el în imaginea de mai jos. Mulți dintre noi îl văd adesea și au, de asemenea, o relație foarte apropiată cu el. Este frumos. Înfățișarea lui este aproape identica cu cea din imagine. Sigura diferență este aceea că arareori apare cu aripi."
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Pentru prea multă vreme, prea multe informații neadevărate au
                  fost răspândite despre Satan. Mulți dintre noi l-au văzut, au
                  stat de vorbă cu el și au fost atinși de acesta în astral.
                  Fiecare dintre noi care îl cunosc, cad de acord în ceea ce
                  privește înfățișarea lui. Religiile de dreapta, pentru prea
                  mult timp, au scris cărți despre felul în care ei cred că el
                  se înfățișează, despre felul în care ei cred că Demonii arată;
                  acestea nu sunt decât minciuni blasfematoare. El nu este roșu,
                  cu coarne și coada și nici nu arată precum monștrii de
                  Halloween. Satan nu are ochii roșii învăpăiați și nici aripi
                  cauciucate. Aceste descrieri sunt menite să-l insulte,
                  denigreze și să îl hulească. În continuare sunt prezentate
                  câteva imagini despre cum s-a înfățișat Satan celor care l-au
                  văzut. În mod contrar afirmațiilor conform cărora satanismul
                  ar fi „întunecat,” Satan apare îmbrăcat într-o robă albă și
                  strălucitoare, identică cu cea purtată de el în imaginea de
                  mai jos. Mulți dintre noi îl văd adesea și au, de asemenea, o
                  relație foarte apropiată cu el. Este frumos. Înfățișarea lui
                  este aproape identica cu cea din imagine. Sigura diferență
                  este aceea că arareori apare cu aripi.
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
            "Mai jos este o pictură veche a lui Edward Burney, din Epica „Paradisul pierdut.”"
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Mai jos este o pictură veche a lui Edward Burney, din Epica
                  „Paradisul pierdut.”
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
            "Mai jos sunt sigiliile Tatălui Satan. Sigiliul cu paharul cu ankh-ul înăuntru, simbolizează pocalul cu elixirul vieții. Acesta este „Graalul sacru” al imortalității. Chakra solară 666 e Graalul sacru."
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Mai jos sunt sigiliile Tatălui Satan. Sigiliul cu paharul cu
                  ankh-ul înăuntru, simbolizează pocalul cu elixirul vieții.
                  Acesta este „Graalul sacru” al imortalității. Chakra solară
                  666 e Graalul sacru.
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
            "Mai jos este o pictură cu Palatului lui Satan din „Paradisul pierdut” de John Martin."
          ) {
            return (
              <View style={look.baseContainer} key={obj + Math.random()}>
                <Text style={look.baseText}>
                  {"\u25CF" + " Ziua lui este Luni"}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" + " Culorile lui sunt albastru, roșu și negru."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " El este Zeul Sumerian EA, de asemenea cunoscut sub numele de ENKI, care înseamnă „Domn al Pământului.” El mai este cunoscut și ca Malek Ta’us."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Animalele care îi sunt sacre: păunul, șarpele, capra, dragonul și corbul."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Numerele lui sunt 13, 666 și 4 (666 reprezintă perfecțiunea și viața eternă)."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Semnele sale zodiacale sunt Vărsător — purtătorul apei; și Capricorn — țapul (Era Vărsătorului e era ascensiunii omenirii)."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Planetele sale sunt Uranus și Venus (Luceafărul de dimineață)."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" + " Direcțiile sale sunt atât sud cât și est."}
                </Text>
                <Text style={look.baseText}>
                  {"\u25CF" +
                    " Ziua anului care este cea mai importantă pentru el, este 23 decembrie, momentul în care Soarele atinge un grad în Capricorn. Prima zi după Solstițiul de Iarna este ziua lui personală, și ar trebui respectată de fiecare satanist dedicat (aceasta mi-a fost dictata în mod personal, de către însuși Satan)."}
                </Text>
                <Text style={look.baseText} key={obj + Math.random()}>
                  Mai jos este o pictură cu Palatului lui Satan din „Paradisul
                  pierdut” de John Martin.
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
          Linking.openURL("https://bucurialuisatan.com/creatia-lui-satan-omenirea/");
        }}
      >
        Creația lui Satan: omenirea
      </Text>
      <Text
        style={look.linkTextLightBlue}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/conversatia-mea-cu-satan/");
        }}
      >
        Conversația mea cu Satan
      </Text>
      <Text
        style={look.linkTextLightBlue}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/numele-lui-satan/");
        }}
      >
        Originile numelui lui Satan
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Satan;
