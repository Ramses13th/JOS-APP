import { ScrollView, Text, Linking } from "react-native";
import look from "../../../BaseStyle/Style";
import BLSButton from "../../../Componente/blsButtonEn";

const ArmataIadului = (props) => {
  console.log("14_nav_loaded");
  return (
    <ScrollView style={look.background}>
      <Text
        style={{
          textAlign: "center",
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
          Linking.openURL(
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/1_18_15.html"
          );
        }}
      >
        PLEASE READ: IMPORTANT!
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Message-From-Satan.html"
          );
        }}
      >
        Spiritual Warfare Message from Satan
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Concerning_Spiritual_Warfare.html"
          );
        }}
      >
        Concerning Spiritual Warfare
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Spiritual_Warfare_Training.html"
          );
        }}
      >
        Spiritual Warfare Training Program for Satanists
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Tactics.html"
          );
        }}
      >
        Tactics and Stategies in the Everyday World
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Bulletin_Board666.html"
          );
        }}
      >
        Spiritual Warfare Bulletin Board
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Resources.html"
          );
        }}
      >
        Spiritual Warfare Resources 666
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
          Linking.openURL("https://satanslibrary.org/GroupsForumsBackup.html");
        }}
      >
        JOIN HELL'S ARMY E-GROUP
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
            "https://www.joyofsatan.org/hailtosatansvictory666.angelfire.com/Hells_Army_Manual.html"
          );
        }}
      >
        For a Free Copy of Hell's Army Spiritual Warfare Training Manual in pdf,
        Please Click Here
      </Text>
      <BLSButton navigate={props} />
    </ScrollView>
  );
};

export default ArmataIadului;
