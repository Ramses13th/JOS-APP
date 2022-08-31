import { View, Image, TouchableOpacity } from "react-native";
import look from "../../BaseStyle/Style";
import React from "react";

const LanguageScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ro");
        }}
      >
        <Image
          source={require("../../../assets/images/Flags/ro-flag.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
          resizeMode="contain"
          className=""
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("en");
        }}
      >
        <Image
          source={require("../../../assets/images/Flags/en-flag.jpg")}
          style={{ width: 220, height: 200, alignSelf: "center" }}
          resizeMode="contain"
          className=""
        />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;
