import { ScrollView, Text, Linking, StyleSheet } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Predici = (props) => {
  console.log("7_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/adevarata-spiritualitate/"
          );
        }}
      >
        Adevărata spiritualitate
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/adevarul-despre-shemhamephorash/"
          );
        }}
      >
        Adevărul despre „shemhamephorash”
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/adevarul-despre-profetiile-biblice/"
          );
        }}
      >
        Adevărul despre „profețiile biblice”
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/adevarul-despre-puterea-lui-satan/"
          );
        }}
      >
        Adevărul despre puterea lui Satan
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/agenda-inamicului/");
        }}
      >
        Agenda inamicului
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/creatia-lui-satan-omenirea/"
          );
        }}
      >
        Creația lui Satan: omenirea
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/dragostea-satanica/");
        }}
      >
        Dragostea satanică
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/gandirea-libera/");
        }}
      >
        Gândirea liberă
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/importanta-ritualurilor-satanice/"
          );
        }}
      >
        Importanța ritualurilor satanice
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/inchizitia/");
        }}
      >
        Inchiziția
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/impartasania-crestina-cum-se-leaga-ea-in-crimele-ritualice-evreiesti/"
          );
        }}
      >
        Împărtășania creștină: cum se leagă aceasta în crimele ritualice
        evreiești
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/moralitatea-sexualitatea-si-tu/"
          );
        }}
      >
        Moralitatea, sexualitatea și tu
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/necronomiconul/");
        }}
      >
        Necronomiconul
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/noua-era-a-lui-satan/");
        }}
      >
        Noua Eră a lui Satan
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://crestinismulexpus.blogspot.be/2013/08/originile-evreiesti-ale-crestinismului.html"
          );
        }}
      >
        Originile (evreiești ale) creștinismului
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/pregatirea-caii-curatarea-mintii/"
          );
        }}
      >
        Pregătirea căii: curățarea minții
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/reverenta-si-respect/");
        }}
      >
        Reverență și respect
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/tactici-in-lupta-si-atacurile-inamice/"
          );
        }}
      >
        Tactici în lupta și atacurile inamice
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/trecutul-nostru-este-distrus/"
          );
        }}
      >
        Trecutul nostru este distrus
      </Text>
      <Text
        style={style.link}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/zeul-suprem/");
        }}
      >
        Zeul Suprem
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  link: {
    textAlign: "center",
    color: "#4BB4FF",
    textDecorationLine: "underline",
    paddingTop: 10,
    letterSpacing: 1,
    borderTopWidth: 1,
    borderColor: "white",
    marginLeft: 20,
    marginTop: 15,
    marginRight: 10,
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default Predici;
