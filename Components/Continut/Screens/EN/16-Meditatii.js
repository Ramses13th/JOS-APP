import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Meditatii = (props) => {
  console.log("16_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text style={look.baseText}>
        „Nebunii nu știu ceea ce fac. Energia este trimisă în sus. Aceasta ar
        trebui să meargă înapoi în Pământ, pentru a-l reface. Folosirea excesivă
        a pentagramei cu vârful în sus, înseamnă aruncarea energiilor în aer,
        pricinuind o sumedenie de probleme și secătuind Pământul de abilitatea
        acestuia de a se apăra pe el însuși împotriva acestor necazuri.” –
        Satan/Lucifer {"\n\n"}Asta are de-a face cu sufletul și cu felul în care
        mișcarea new age continuă să-i îndemne pe adepți să se concentreze
        exclusiv pe chakrele lor superioare. Fiecare chakră formează o pereche
        cu o altă chakră, întotdeauna una masculină + una feminină, și amândouă
        acestea lucrează împreună. Atât chakrele superioare cât și cele
        inferioare trebuie să fie echilibrate între ele.
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
            "https://bucurialuisatan.com/ceea-ce-ar-trebui-sa-stii-despre-meditatia-de-imputernicire/"
          );
        }}
      >
        Ceea ce ar trebui să știi – lucruri importante despre meditația de
        împuternicire
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
            "https://bucurialuisatan.com/ceea-ce-ar-trebui-sa-stii-despre-minte/"
          );
        }}
      >
        Despre minte
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
          Linking.openURL("https://bucurialuisatan.com/meditatii-satanice/");
        }}
      >
        MEDITAȚIA DE ÎMPUTERNICIRE
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Meditatii;
