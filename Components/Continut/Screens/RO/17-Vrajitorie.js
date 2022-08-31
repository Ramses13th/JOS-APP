import { ScrollView, Text, Linking, Image } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

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
        Magia, vrăjitoria, vrăjile, etc., sunt toate puteri ale minţii. Succesul
        oricărei astfel de lucrări depinde de tăria şi de puterea mentală, a
        aurei şi a puterii de concentrare a operatorului şi abilitatea acestuia
        de a simţi şi direcţiona energia. Înţelegerea energiei, abilitatea de a
        discerne între diferitele tipuri de energie, invocarea, evocarea şi
        direcţionarea energiei reprezintă fundaţia tuturor formelor de
        „vrăjitorie.”
      </Text>

      {/* nested link in text */}
      <Text style={look.baseText}>
        <Text style={look.baseText}>Aceste abilităţi se dobândesc prin</Text>

        <Text
          style={look.linkTextLightBlue}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/meditatii/");
          }}
        >
          {" "}
          MEDITAŢIA DE ÎMPUTERNICIRE.
        </Text>
        <Text style={look.baseText}>
          {" "}
          Pe cât de sârguincios, consistent şi dedicat eşti unui program de
          meditaţie de împuternicire, pe atât de puternice îţi vor fi lucrările
          magice. Începătorii sunt încurajaţi să înceapă cu magia albă şi gri,
          deoarece magia neagră necesită mai multă cunoştinţă şi îndemânare.
          Acestea se capătă în timp.{" "}
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
            "https://bucurialuisatan.com/informatii-importante-despre-fundamentul-magiei/"
          );
        }}
      >
        TE RUGĂM SĂ ÎŢI FACI TIMP ŞI SĂ CITEŞTI ACESTE ARTICOLE DESPRE VRĂJI ŞI
        MAGIE
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
          fontSize: 16,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/vrajitorie-incepatori/");
        }}
      >
        Începători
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
          fontSize: 16,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL(
            "https://bucurialuisatan.com/vrajitorie-intermediari/"
          );
        }}
      >
        Intermediari
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
          fontSize: 16,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/vrajitorie-avansati/");
        }}
      >
        Avansați
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
          fontSize: 16,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/vrajitorie-divinatie/");
        }}
      >
        Divinație
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
          fontSize: 16,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/vrajitorie-informatii/");
        }}
      >
        Informații
      </Text>

      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Vrajitorie;
