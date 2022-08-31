import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButton";

const Links = (props) => {
  console.log("6_nav_loaded");
  return (
    <ScrollView style={look.background}>
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://bucurialuisatan.com/forum/index.php");
        }}
      >
        Forumurile Bucuria lui Satan
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.crestinismulexpus.blogspot.ro/");
        }}
      >
        Creștinismul Expus
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.666soarelenegru.blogspot.ro/");
        }}
      >
        Soarele Negru 666
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.adevaratulholocaust.blogspot.ro/");
        }}
      >
        Adevăratul Holocaust
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.altreileasex.blogspot.ro/");
        }}
      >
        Societatea Thule de al Treilea Sex
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
          fontSize: 24,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.adevaruldespreislam.blogspot.be/");
        }}
      >
        Adevărul despre islam {"\n"}
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
          fontSize: 18,
          fontStyle: "italic",
        }}
        onPress={() => {
          Linking.openURL("https://www.youtube.com/user/BucuriaLuiSatan");
        }}
      >
        YouTube – Bucuria lui Satan
      </Text>
      <Text style={look.baseText}>
        {" "}
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
            fontSize: 18,
            fontStyle: "italic",
          }}
          onPress={() => {
            Linking.openURL("https://www.youtube.com/user/iknowthetruth88/videos");
          }}
        >
          YouTube – Exposing Christianity
        </Text>{" "} <Text>(eng)</Text>
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
            fontSize: 24,
            fontStyle: "italic",
          }}
          onPress={() => {
            Linking.openURL("https://bucurialuisatan.com/biblioteca/");
          }}
        >
          {'\n'}Biblioteca lui Satan
        </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default Links;
